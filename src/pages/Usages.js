import React, { Component } from 'react'

class Usages extends Component {

  render () {
    return (
      <div className='Usages'>
        <div className='usages-header'></div>
        <section className='usage-bloc'>
          <div>
            <h1>Make<br />a perfect gift</h1>
          </div>
        </section>
        <section className='usage-bloc'>
        <div className='right'>
          <h1>With a final<br />personalized<br />touch</h1>
        </div>
        </section>
        <section className='usage-bloc'>
          <div>
            <h1>Put your personality<br />everywhere</h1>
          </div>
        </section>
        <section className='usage-bloc'>
          <div className='right'>
            <h1>Make things<br />yours</h1>
          </div>
        </section>
        <section className='usage-bloc'>
          <div>
            <h1>And create<br /> memories</h1>
          </div>
        </section>
      </div>
    )
  }

}

export default Usages
