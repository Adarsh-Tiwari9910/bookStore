import React from 'react'
import { Link } from 'react-router-dom'
 
import { useForm } from "react-hook-form"
import Navbar from './Navbar'
 

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div>
       <Navbar/>
 
  <form onSubmit={handleSubmit(onSubmit)}> 
  <div className="modal-box">
    <h3 className="font-bold text-lg">Contact</h3>
    <div className='mt-4 space-y-2'>
    <span>Name</span>
        <br/>
         <input type ="text"
         placeholder="Enter your Name"
         {...register("name", { required: true })}
         className="w-80 px-3  border rounded-md outline-none"/>
         <br/>
         {errors.name && <span className='text-sm text-red-600'>name field is required</span>}
         <br/><br/>
     <span>E-mail</span>
         <br/>
         <input type ="email"
         {...register("email", { required: true })}
         placeholder="Enter your E-mail"
         className="w-80 px-3  border rounded-md outline-none"/>
         <br/>
         {errors.email && <span className='text-sm text-red-600'>email field is required</span>}
     </div>
    {/* {password} */}


     

    <div className="flex    justify-around mt-4">
        <button className='bg-pink-500 text-white rounded-md px-3 py-1'>Submit</button>
         
    </div>
    <div className="modal-action">
      <div method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn  border-l-2"><Link to ="/" ><button> <span className="underline text-blue-500 cursor-pointer">Go to Home page</span></button> </Link> </button>
      </div> 
    </div> 
  </div></form>
 
    </div>
     
  )
}

export default Contact
