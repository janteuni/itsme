import React, { Component } from 'react'

class Logo extends Component {

  static defaultProps = {
    width: 121.4
  }

  render () {
    const { width } = this.props
    const height = width * 59.3 / 121.4
    return (
      <svg className='Logo'
        x='0px' y='0px'
        viewBox='0 0 121.4 59.3'
        width={width}
        height={height}>
        <g>
          <path className='st0' d='M10.4,51.1c-3.2-0.6-5.9-1-8.6-1.6c-1.8-0.5-2.4-2.4-1-3.9c2-2.1,2.4-4.5,2.2-7.1c-0.6-7.4-0.3-14.8-0.5-22.2C2.4,12.1,3,7.8,1.5,3.7C1.2,3,1.3,2.2,1.9,1.7c1.9-1.4,3.9-2.3,6.2-1.2c1.7,0.7,3.3,1.6,5,2.4c1,0.5,2.2,0.8,2.2,2.2c0,1.2-1.1,1.4-1.8,1.8c-1,0.6-1,1.6-0.8,2.4c0.5,3.5,1.1,6.9,1.4,10.5c0.7,6.3,1,12.5,1,18.8c0.1,2.7,0.4,5,2.9,6.7c1.5,1,1.2,2.8-0.5,3.5C15.1,49.8,12.6,50.5,10.4,51.1z'/>
          <path className='st0' d='M24.1,26.7c0.2-1.5,1.4-3.2,0.2-4.6c-1-1.2-2.8-0.5-4.2-0.8c-1.6-0.3-3.2-0.5-4.6-1.3c-0.7-0.3-1.2-0.9-1.2-1.7c0.1-0.8,0.7-1.4,1.4-1.6c1.4-0.3,2.9-0.7,4.4-0.8c1.3-0.2,2.7-0.2,3.9-0.1c1.9,0,3.1-0.7,3.8-2.4c0.5-1.4,1.3-2.7,2.1-3.9c0.8-1.1,2-1.8,3.3-1.8c2-0.1,3.5,1,3.9,2.9c0.1,0.3,0.1,0.5,0.1,0.9c-0.1,3.6,0.5,4.6,4.8,4.4c1-0.1,2,0.3,2.9,0.8c0.9,0.6,1.6,1.4,1.6,2.5c-0.1,1.2-0.7,1.9-1.8,2.3c-0.7,0.3-1.4,0.5-2.1,0.7c-0.5,0.1-1.2,0.1-1.7,0.1c-5.7-0.1-5,1.1-6.1,5.1c-1.2,5.2-2.3,10.3-3.4,15.5c-0.1,0.7-0.2,1.5-0.2,2.2c-0.1,0.6,0.7,1,1.3,0.8c1.4-0.7,2.4-1.8,3.3-2.9c1.6-2,3-4,4.4-6.1c1-1.4,2-2.9,3.3-4.1c0.6-0.4,1.4-0.6,2.1-0.2c0.7,0.5,0.9,1.2,0.7,2c-2,7-6.1,12.4-12.6,15.6c-3.5,1.7-7.8,0.8-10.2-3.5c-1.1-2-1.6-4.1-1.6-6.4L24.1,26.7z'/>
          <path className='st0' d='M53.1,59.2c-2.2,0.1-4.4-0.5-5.9-2.4c-1.7-2.2-1.8-4.5-0.1-6.7c0.6-0.7,1.3-1.5,2-2.1c3-2.9,3-3.3-0.5-5.2c-1-0.6-2-1.3-3.1-1.9c-0.2-0.1-0.3-0.3-0.5-0.5c-4.4-3.3-4.6-6.9-1.8-11.3c1.8-2.9,4.6-4.1,7.8-4.6c1-0.1,1.9,0.1,2.8,0.6c2.7,1.6,2.4,3.3,0.7,4.8c-0.8,0.6-1.6,1.2-2.3,1.8c-0.7,0.6-1.4,1.3-1.9,2c-1.8,3.1-1.6,4.3,1.2,6.4c0.5,0.4,0.9,0.7,1.4,1.1c2.9,1.8,2.8,3.1,7.5,1.9c2.2-0.5,0.5-0.5,2.8-0.7c1.2-0.1,2.2,0,3.2,0.5c0.4,0.2,0.8,0.5,0.8,1c0,0.6-0.4,1-0.9,1.1c-0.6,0.2-1.4,0.3-2,0.3c-1.2,0.1-2.2,0.1-0.6,0.1c1.4,0-1.3,0.2-2.6,0.5c-2,0.5-2.1,1-1.6,2.8c0.3,0.8,0.6,1.6,0.8,2.4c1.2,5.3-2.2,7.6-5.9,8C54,59.3,53.6,59.2,53.1,59.2z M49.5,53.5c0,0.8,0.7,1.4,1.3,1.2c1.3-0.5,2.4-2,2.2-3.7c-0.1-0.3-0.4-0.6-0.7-0.7c-0.8-0.3-2,0.7-2.7,2.4C49.5,53,49.5,53.4,49.5,53.5z'/>
          <path className='st0' d='M70.6,29.9c0.7-0.7,1.1-1.4,1.6-2s1.1-1.2,1.7-1.7c2-1.6,3.9-1.3,5.4,0.9c0.7,1,1.1,2,1.6,3c1.1-0.1,1.2-1,1.6-1.6c1.9-2.3,5.1-2,6.7,0.2c0.9,1.1,1.4,2.4,1.7,3.7c0.5,1.9,0.7,3.8,0.8,5.7c0,1-0.3,2,0.4,3.1c1.2-0.5,1.6-1.6,1.9-2.6c0.4-0.9,0.6-1.8,1-2.6c0.4-0.7,1.2-1.1,2-0.9c1,0.3,1.7,1.2,1.6,2c-0.1,0.5-0.3,1.1-0.5,1.6l-5.2,8.4c-0.2,0.4-0.5,0.7-0.8,1c-1.7,2-2.8,2.4-4.6,1.8c-2.4-0.8-3.7-2.5-3.5-4.8c0.1-2.4,0.5-4.7,0.9-7.1c0.2-1.4,0.3-2.7,0.4-4.1c0.1-0.5,0.2-1.2-0.3-1.6c-0.7-0.3-1,0.5-1.3,0.9c-1.4,1.9-2.3,3.9-2.5,6.3c-0.3,2.6-0.9,5.1-1.6,7.6c-0.6,2.2-2.3,3.1-4.8,2.1c-2.4-1.2-3.3-2.6-2.4-5.2c1.2-3.9,1.4-7.8,1.8-11.8c0.1-0.2,0-0.5-0.2-0.5c-0.3-0.3-0.6,0-0.8,0.3c-1.5,2.6-2.7,5.4-3.4,8.5c-0.3,1.3-0.5,2.7-0.8,3.9c-0.3,1.6-1.6,2.4-3.1,2.8c-1.9,0.4-3.7-1-3.8-3c-0.1-0.5,0-1.1,0.1-1.6c1.1-4.5,1.6-8.9,1.9-13.5v-0.3c0.1-1.1,0.3-2,1.6-2.4c1.2-0.3,2.2,0.2,3,1.1C69.5,28.2,69.5,29.2,70.6,29.9z'/>
          <path className='st0' d='M104.6,49.6c-5,0-8.6-3.3-8.6-8.2c-0.1-6.5,2.7-11.8,8-15.8c2.7-2,6.4-1.6,8.7,0.7c1.7,1.6,2.1,3.2,1.2,5.3c-1.8,3.7-4.4,6.4-8.5,7.5c-0.5,0.1-1,0.2-1.4,0.3c-0.5,0.1-0.8,0.6-0.9,1.1c-0.3,1.6,0,3.1,0.9,4.6c0.7,1,1.8,1.3,2.9,0.7c2-1,3.6-2.4,5.2-4c0.9-0.9,5.8-5.8,6.7-6.7c0.4-0.5,1-0.6,1.7-0.6c0.5,0.1,1.2,0.8,1,1.3c-0.1,0.5-0.2,1-0.5,1.4c-2.2,2.7-8.6,9.2-11.6,11.1C107.8,49.2,106.2,49.7,104.6,49.6z M109.2,31.2c0-0.4,0-0.7-0.1-1.1c-0.1-0.5-0.1-1-0.7-1.2c-0.5-0.1-1,0.1-1.3,0.4c-1.6,1.6-2.7,3.4-3.3,5.6c-0.2,0.6-0.2,1.2,0.4,1.6c0.5,0.3,1.2,0.3,1.8,0C108.1,35.3,109.2,33.6,109.2,31.2z'/>
        </g>
      </svg>
    )
  }

}

export default Logo
