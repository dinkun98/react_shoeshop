import React from 'react'


export const ProductItem = (props) => {
    const { product, handleProductDetail, handleCarts } = props
    console.log('product: ', product)
    // console.log('data: ', data)
    return (
    <div className='col-3'>
        <div className="card">
            <img src={product.image} alt="" />
            <p className="card-body">
                <p className="card-title">
                    {product.name}
                </p>
                <p>{product.price}</p>
                <div className="d-flex justify-content-between"></div>
                <button className="btn btn-outline-dark" onClick={ () => handleCarts(product)} >Buy</button>
                <button className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" onClick={()=>handleProductDetail(product)}>Detail</button>
            </p>
        </div>
    </div>
  )
}
