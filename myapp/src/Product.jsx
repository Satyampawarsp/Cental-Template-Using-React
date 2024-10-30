import React from "react";

const Products=(props)=>{
  const{name,img,btn1,btn2}=props;
    return(
        <div className="card m-3">
        <div className="card-header">
          <h1 className='text-center'>{name}</h1>
        </div>
        <div className="card-body">
          <img className='img-fluid' src={img} alt="" height="300px" />
        </div>
        <div className="card-footer">
          <button className='btn btn-danger px-4 mx-3 text-center fw-bold'>{btn1}</button>
          <button className='btn btn-outline-dark px-4 text-center fw-bold'>{btn2}</button>
        </div>
      </div>
    )
}
export default Products;