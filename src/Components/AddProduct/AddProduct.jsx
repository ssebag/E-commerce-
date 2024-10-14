import React from 'react'
import './AddProduct.css'
export default function AddProduct() {
  return (
    <form className='addProductForm flex-col'>
       <div className="flex-bw">
            <input type="text" name="title" id="title" placeholder='Title' />
            <input type="text" name="price" id="price" placeholder='Price' />
       </div>
       <div className="flex-bw">
        <select name="category" id="category">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <input type="image" src="" alt="Image" />
        <button className='main-buttons'>Choose</button>
       </div>
       <textarea type="text" src="descrition" alt="descrition" placeholder='Descrition' />
       <button className='main-buttons' type="submit">Submit</button>
    </form>
  )
}
