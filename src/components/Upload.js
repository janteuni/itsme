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

  handleDrop (files) {
    this.setState({ files })

    const { onSuccess } = this.props
    const fd = new FormData()
    files.forEach(file => fd.append('file', file))

    r.post(`${config.apiFull}/upload`)
      .send(fd)
      .end((err, res) => {
        if (err) { return }
        this.setState({ files: [] })
        onSuccess(res.body)
      })
  }

  handleImageClick (imageId) {
    this.props.onImageDelete(imageId)
  }

  render () {
    const { files } = this.state
    const { cacheImages } = this.props
    return (
      <div className='upload-container'>

        <Dropzone className='upload-dropzone' onDrop={::this.handleDrop}>
          <SvgImage />
          <div>drag and drop your photos</div>
        </Dropzone>

        <div className='flex'>
          {!!cacheImages.length && (
              cacheImages.map(file => (
                <Thumbnail
                  key={file}
                  imageId={file}
                  src={`${config.uploadPath}/${file}`}
                  onImageDelete={this.props.onImageDelete}/>
              ))
          )}
          {!!files.length && (
              files.map(file => (
                <img className='thumbnail waiting' key={file.name} src={file.preview} />
              ))
          )}
        </div>
      </div>
    )
  }

}

export default Upload
