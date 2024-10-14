import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Category.css'
import Card from './../CardCategory/CardCategory'
import {Dataaa} from './.././../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IImg from './../../assets/Category-CellPhone.png'

function Category() {
 /*  const [Data, setData] = useState([]);
  useEffect(() => {
   axios.get('https://fakestoreapi.com/products/categories').
   then(res => setData(res.data))
 }, [])  */
const countCard= Dataaa.length;  
 const [slidesPerView, setSlidesPerView] = useState(1);

 useEffect(() => {
   const updateSlidesPerView = () => {
    const width = window.innerWidth;
     if (countCard > 5) {
      if (width < 380) {
        setSlidesPerView(1);
      }  
      else if (width < 500) {
        setSlidesPerView(2);
      }  
      else if (width < 690) {
        setSlidesPerView(3);
      }  
      else if (width < 868) {
        setSlidesPerView(4);
      } else if (width < 1162) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(6);
      }
     }  else if(countCard > 3) {
     if (width < 400) {
        setSlidesPerView(1);
      }  
      else if (width < 550) {
        setSlidesPerView(2);
      }  
      else if (width < 680) {
        setSlidesPerView(countCard - 2);
      } 
      else if (width < 1024) {
        setSlidesPerView(countCard - 1);
      }
      else  {
        setSlidesPerView(countCard);
      }
     }
     else {
      if (width < 400) {
         setSlidesPerView(1);
       }  
       else if (width < 550) {
        setSlidesPerView(countCard - 1 );
      } 
       else{
         setSlidesPerView(countCard);
       }  
      }
   };
   updateSlidesPerView();
   window.addEventListener('resize', updateSlidesPerView);
   return () => {
     window.removeEventListener('resize', updateSlidesPerView);
   };
 }, []);

  return (
    <div className='categories container '>
        <div className="home-sec-title">
            <p>Categories</p>
            <h1>Browse By Category</h1>
        </div>
        <div className="slider">
        <Swiper
         modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          slidesPerView={slidesPerView}
          autoplay={{
            delay:5000,
            disabledInteraction: false
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
        {  
          Dataaa?.map((ele)=>{
            console.log(ele)
            return(
              <SwiperSlide>
                <Card img={IImg} title={ele.namee} />
            </SwiperSlide>
              )
        })}      
         </Swiper> 
        </div>

    </div>
  )
}

export default Category
