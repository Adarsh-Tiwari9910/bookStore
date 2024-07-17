import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from './Cards';
const Freebook = () => {
  const [book,setbook]=useState([]);
  useEffect(()=>{
      const getBook= async()=>{
        try{
          const res= await axios.get("http://localhost:4000/book");
          
          setbook(res.data.filter((data)=>data.category==="free"))
        }catch(error){
            console.log(error)
        }
      }
      getBook();
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
  return (
    <div>
        <div>
            <h1 className='font-bold text-xl pb-2'>Free Courses offered</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quam, voluptas consequuntur rerum deleniti optio placeat aperiam. Laudantium, dicta totam!</p>
        </div>
        <div>
        <div className="slider-container">
      <Slider {...settings}>
         {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            )
            )
         }
      </Slider>
    </div>
        </div>
      
    </div>
  )
}

export default Freebook
