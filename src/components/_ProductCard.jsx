import React from 'react'

const ProductCard = ({ productName, price, bb}) => {
  return (
    <div>
        <p>{productName}</p>
        <p>{price}</p>
        <p>{bb}</p>
    </div>
  )
}

export default ProductCard