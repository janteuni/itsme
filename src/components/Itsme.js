import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addImages, deleteImage, deleteItsme } from 'actions/order'
import Upload from 'components/Upload'

@connect(
  state => ({
    isDeletable: state.newOrder.itsmes.length > 1
  })
)
class Itsme extends Component {

  handleUpload (filesNames) {
    this.props.dispatch(addImages({ id: this.props.data.id, images: filesNames }))
  }

  handleImageDelete (imageId) {
    this.props.dispatch(deleteImage({ itsmeId: this.props.data.id, imageId }))
  }

  handleDelete () {
    this.props.dispatch(deleteItsme(this.props.data.id))
  }

  render () {
    const { data, isDeletable } = this.props

    return (
      <div>
        <Upload
          cacheImages={data.images}
          onSuccess={::this.handleUpload}
          onImageDelete={::this.handleImageDelete}/>
        <p>Sheets: {data.sheets}</p>
        {isDeletable && (
          <button onClick={::this.handleDelete}>DELETE ME</button>
        )}
      </div>
    )
  }

}

export default Itsme
