import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateSheets, addImages, deleteImage, deleteItsme } from 'actions/order'
import Upload from 'components/Upload'
import SelectNumber from 'components/SelectNumber'

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

  handlePlus () {
    const { sheets, id } = this.props.data
    this.props.dispatch(updateSheets({ id, sheets: sheets + 1 }))
  }

  handleMinus () {
    const { sheets, id } = this.props.data
    if (sheets <= 2) { return }
    this.props.dispatch(updateSheets({ id, sheets: sheets - 1 }))
  }

  render () {
    const { data, isDeletable } = this.props

    return (
      <div className='card'>

        <Upload
          cacheImages={data.images}
          onSuccess={::this.handleUpload}
          onImageDelete={::this.handleImageDelete}/>

        <SelectNumber
          number={data.sheets}
          plus={::this.handlePlus}
          minus={::this.handleMinus}>
          Sheets
        </SelectNumber>

        {isDeletable && (
          <button onClick={::this.handleDelete}>DELETE ME</button>
        )}

      </div>
    )
  }

}

export default Itsme
