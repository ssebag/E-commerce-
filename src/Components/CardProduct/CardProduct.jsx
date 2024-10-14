import React from 'react'
import './CardProduct.css'
import HH from './../../assets/Category-CellPhone.png'
function CardProduct({details}) {
  const {img, title, price} = details
  return (
    <div className='cardProduct'>
        <div className="card-top flex-col flex-center">
           <img src={img} alt="" />
           <button>Show Details</button>
        </div>
        <div className="card-description">
            <p className="product-title">{title}</p>
            <p className="product-price">{price} $</p>
        </div>

    </div>
  )
}

export default CardProduct