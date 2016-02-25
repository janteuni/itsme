import React, { Component } from 'react'
import cx from 'classnames'

import SvgClose from 'components/SvgClose'

class Thumbnail extends Component {

  handleImageClick () {
    const { imageId } = this.props
    this.props.onImageDelete(imageId)
  }

  render () {
    const { src, loading } = this.props
    return (
      <div className={cx('thumbnail', { loading })}>
        {!loading && (
          <i onClick={::this.handleImageClick}>
            <SvgClose />
          </i>
        )}
        <img src={src} />
      </div>
    )
  }

}

export default Thumbnail
