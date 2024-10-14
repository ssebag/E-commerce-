import React from 'react'
import './CardCategory.css'


function CardCategory({img, title, description}) {
  return (
    <div className="category-card flex-col flex-al-c">
        <img src={img} alt="" />
        <p className="category-title">{title}</p>
        <p className="category-des">{description}</p>
    </div>
  )
}

export default CardCategory