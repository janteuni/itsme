import React, { Component } from 'react'

import SvgClose from 'components/SvgClose'

class Thumbnail extends Component {

  handleImageClick () {
    const { imageId } = this.props
    this.props.onImageDelete(imageId)
  }

  render () {
    const { src } = this.props
    return (
      <div className='thumbnail'>
        <i onClick={::this.handleImageClick}>
          <SvgClose />
        </i>
        <img src={src} />
      </div>
    )
  }

}

export default Thumbnail
