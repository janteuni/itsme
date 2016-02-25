import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Thumbnail from 'components/Thumbnail'
import SvgImage from 'components/SvgImage'
import r from 'superagent'

import config from 'config'

class Upload extends Component {

  constructor (props) {
    super(props)
    this.state = {
      files: []
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
          this.setState({ files: [] })
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

    console.log(allImages)

    return (
      <div className='upload-container'>

        <Dropzone className='upload-dropzone' onDrop={::this.handleDrop}>
          <SvgImage />
          <div>drag and drop your photos</div>
        </Dropzone>

        <div className='flex'>
          {!!allImages.length && (
              allImages.map(file => (
                <Thumbnail
                  key={file.src}
                  imageId={file.imageId}
                  src={file.src}
                  loading={file.loading}
                  onImageDelete={this.props.onImageDelete}/>
              ))
          )}
        </div>
      </div>
    )
  }

}

export default Upload
