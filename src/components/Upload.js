import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Thumbnail from 'components/Thumbnail'
import SvgImage from 'components/SvgImage'
import r from 'superagent'
import TransitionGroup from 'react-addons-css-transition-group'

import config from 'config'

class Upload extends Component {

  constructor (props) {
    super(props)
    this.state = {
      files: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.cacheImages.length !== nextProps.cacheImages.length) {
      this.setState({ files: [] })
    }
  }

  preloadImgs (imgs) {
    return Promise.all(imgs.map(img => new Promise((resolve) => {
      const i = new Image()
      i.onload = () => resolve()
      i.src = `${config.uploadPath}/${img}`
    })))
  }

  handleDrop (files) {
    this.setState({ files })

    const { onSuccess } = this.props
    const fd = new FormData()
    files.forEach(file => fd.append('file', file))

    r.post(`${config.apiFull}/upload`)
      .send(fd)
      .end((err, res) => {
        if (err) { return }
        const imgs = res.body
        this.preloadImgs(imgs).then(() => {
          onSuccess(res.body)
        })
      })
  }

  handleImageClick (imageId) {
    this.props.onImageDelete(imageId)
  }

  render () {
    const { files } = this.state
    const { cacheImages } = this.props

    const loadedImages = cacheImages.map(src => ({
      loading: false,
      imageId: src,
      src: `${config.uploadPath}/${src}`
    }))

    const loadingImages = files.map(file => ({
      loading: true,
      src: file.preview
    }))

    const allImages = loadedImages.concat(loadingImages)

    return (
      <div className='upload-container'>

        <Dropzone className='upload-dropzone' onDrop={::this.handleDrop}>
          <SvgImage />
          <div>drag and drop your photos</div>
        </Dropzone>

        <TransitionGroup
          className='flex flex-wrap'
          transitionName='uploadTransition'
          transitionEnterTimeout={500}
          transitionLeave={false}>
          {!!allImages.length && (
              allImages.map((file, i) => (
                <div key={i} className='thumbnail-container'>
                  <Thumbnail
                    imageId={file.imageId}
                    src={file.src}
                    loading={file.loading}
                    onImageDelete={this.props.onImageDelete}/>
                </div>
              ))
          )}
        </TransitionGroup>
      </div>
    )
  }

}

export default Upload
