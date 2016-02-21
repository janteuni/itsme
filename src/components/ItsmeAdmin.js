import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addResults, deleteResult, saveCurrent } from 'actions/admin'
import Upload from 'components/Upload'

@connect()
class ItsmeAdmin extends Component {

  handleUpload (filesNames) {
    this.props.dispatch(addResults({ id: this.props.data.id, images: filesNames }))
    this.props.dispatch(saveCurrent())
  }

  handleImageDelete (imageId) {
    this.props.dispatch(deleteResult({ itsmeId: this.props.data.id, imageId }))
    this.props.dispatch(saveCurrent())
  }

  render () {
    const { data } = this.props
    return (
      <div>
        <Upload
          cacheImages={data.results}
          onSuccess={::this.handleUpload}
          onImageDelete={::this.handleImageDelete}/>
      </div>
    )
  }

}

export default ItsmeAdmin
