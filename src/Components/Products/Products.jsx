import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Products.css'
import Card from './../CardProduct/CardProduct'
function Products() {
  const [Data, setData] = useState([]);
  useEffect(() => {
   axios.get('https://fakestoreapi.com/products?limit=8').
   then(res => setData(res.data))
 }, []) 

  return (
    <div className='products container'>
        <div className="home-sec-title">
            <p>Our Prducts</p>
            <h1>Explore Our Products</h1>
        </div>    
        <div className="products-div">
        {  
        Data?.map((ele,index)=>{
            return(
              <Card details={ele} />
              )
            })}
        </div>
        <button className='main-buttons'>View All Products</button>
    </div>
  )
}

export default Products