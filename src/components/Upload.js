import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
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

  render () {
    const { files } = this.state
    const { cacheImages } = this.props
    return (
      <div>
        <Dropzone onDrop={::this.handleDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {!!cacheImages.length && (
          <div>
            {cacheImages.map(file => (
              <img key={file} src={`${config.uploadPath}/${file}`} />
            ))}
          </div>
        )}
        {!!files.length && (
          <div>
            <h2>Uploading {files.length} files...</h2>
            <div>
              {files.map(file => (
                <img key={file.name} src={file.preview} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default Upload
