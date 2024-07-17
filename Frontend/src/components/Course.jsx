import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'

import { Link } from 'react-router-dom'
import axios from "axios";

const Course = () => {
  const [book,setbook]=useState([]);
  useEffect(()=>{
      const getBook= async()=>{
        try{
          const res= await axios.get("http://localhost:4000/book");
          
          setbook(res.data)
        }catch(error){
            console.log(error)
        }
      }
      getBook();
  },[])
  return (
    <div>
        <Navbar/>
       <div>
        <h1 className='text-2xl mt-10 text-center font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'> here!  :</span>  </h1>
        <p className='mt-10 text-center mx-auto w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ut officia laudantium eius aspernatur aut quam fugiat numquam. Tempore odio eos excepturi facere vel molestiae recusandae nesciunt molestias magni ratione.</p>
        <Link to="/" > <button type="button" className="mt-3 mb-3 h-10 ml-12 w-30 pl-5 text-center p-5 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:focus:ring-yellow-900 ">Click To Back</button></Link>
 '  
        <div className="mt=12 grid grid-cols-1 md:grid-cols-4">
       
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            )
            )
         }
         </div>
       </div>
      <Footer/>
    </div>
  )
}

export default Course
