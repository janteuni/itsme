import React, { Component } from 'react'

import Upload from 'components/Upload'

class Itsme extends Component {

  render () {
    const { data } = this.props

    return (
      <div>
        <Upload
          cacheImages={data.images}
          onSuccess={this.props.onUpload}
          onImageDelete={this.props.onImageDelete}/>
        <p>Sheets: {data.sheets}</p>
      </div>
    )
  }

}

export default Itsme
