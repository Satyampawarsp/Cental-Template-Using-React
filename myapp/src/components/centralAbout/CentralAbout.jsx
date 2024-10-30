import React from 'react'
import "./CentralAbout.css"
const CentalAbout = () => {
  return (
 <div className="container mt-5">
    <div className="row">
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='fw-bold fs-1 text-danger text-center'>Cental<span className='m-2 text-dark'>About</span></h1>
                    <p className='fw-medium fs-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, explicabo.</p>
                    <div className="row">
                        <div className="col-lg-3 section1">
                            <div className="card">
                                <div className="card-header">
                                <i class="bi bi-balloon-fill"></i>
                                </div>
                                <div className="card-body">
                                    <h3>our vision</h3>
                                </div>
                                <div className="card-footer text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 section1">
                            <div className="card">
                                <div className="card-header">
                                <i class="bi bi-browser-edge"></i>
                                </div>
                                <div className="card-body">
                                    <h3>our vision</h3>
                                </div>
                                <div className="card-footer text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='font text-center fs-4 fw-lighter'>Lorem ipsum dolor sit, amet . Eveniet nemo illum, dolorum perspiciatis consectetur alias praesentium iure recusandae? Tenetur, est nemo itaque sunt quasi officiis ex deserunt excepturi neque tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis nam cupiditate tempora qui ratione vel enim ipsum laborum ex, consectetur consequatur numquam dignissimos consequuntur aut amet ipsa sequi ea!</p>
                </div>
            {/* .............................................. */}
            <div class="col-lg-6">
                       <div className="container">
                       <div className="about-img ">
                            <div className="img-1">
                                <img src="Images/About1.jpg" alt="" className='imager' />
                            </div>
                            <div className="img-2">
                            <img src="Images/About2.jpg" alt="" className='imager2'/>
                            </div>
                        </div>
                       </div>
                    </div>

            </div>
        </div>
    </div>
 </div>
  )
}

export default CentalAbout
