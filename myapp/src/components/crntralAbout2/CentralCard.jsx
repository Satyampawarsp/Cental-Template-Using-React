import React from 'react'

const CentralCard = (props) => {
  return (
    <div class="col-lg-3 col-md-6">
          <div class="text-light">
            <h1 className='fw-light text-center text-info'>{props.png}</h1>
            <span className='text-light fw-light fs-1 '>{props.info}</span>
            <p className='text-light fs-3 fw-bold'>{props.para}</p>
          </div>
        </div>
  )
}

export default CentralCard
