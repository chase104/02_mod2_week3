import './index.css'
import React from 'react'

const Card = ({productData}) => {
  return (
    <div className="card">
        <h3>{productData.title}</h3>
        <img src={productData.image} alt={productData.title} />
        <div>{productData.description}</div>
    </div>
  )
}

export default Card