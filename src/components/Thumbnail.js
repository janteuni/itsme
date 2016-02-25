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
    const style = {
      backgroundImage: `url(${src})`
    }
    return (
      <div className={cx('thumbnail', { loading })} style={style}>
        {!loading && (
          <i onClick={::this.handleImageClick}>
            <SvgClose />
          </i>
        )}
      </div>
    )
  }

}

export default Thumbnail
