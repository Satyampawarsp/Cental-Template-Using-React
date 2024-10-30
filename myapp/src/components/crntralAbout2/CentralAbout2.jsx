import React from 'react'
import './CentralAbout2.css'
import CentralCard from './CentralCard'

const CentralAbout2 = () => {


  const Data=[{
    png:<i class="bi bi-hand-thumbs-up"></i>,
    para:"Happy Clients",
    info:"829 +"
  },
  {
    png:<i className="bi bi-trophy"></i>,
    para:"Number of Cars",
    info:"51 +"
  },
  {
    png:<i class="bi bi-car-front-fill"></i>,
    para:"Car Center",
    info:"127+"
  },
  {
    png:<i class="bi bi-alarm"></i>,
    para:"Total kilometers",
    info:"589 +"
  }]
  return (
    <>
    
    <section class="section-red img-fluid ">
    <div class="container-red font-weight-bold ">
      <div class="row">

        {
          Data.map((val,index)=>(
            <CentralCard
            png={val.png}
            para={val.para}
            info={val.info}
            />
          ))

        }
        
      </div>
    </div>
  </section>
    </>
  )
}

export default CentralAbout2
