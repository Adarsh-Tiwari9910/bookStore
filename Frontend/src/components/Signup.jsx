import React from 'react'
import { Link } from 'react-router-dom'
 import axios from "axios"
import { useForm } from "react-hook-form"
import Login from '../components/Login'
import Navbar from './Navbar'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4000/user/signup",userInfo)
    .then((res)=>{
      toast.success("signup successfully");
      localStorage.setItem("Users",JSON.stringify(res.data));
    }
     
    ).catch((err)=>{
console.log("signup Error: ",err.response.data.message);
    if(err.response){
      
      toast.error("Error: "+ err.response.data.message);
    }
 
    })
  }
  return (
    
    <div>
      <Navbar/>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
 
  <form onSubmit={handleSubmit(onSubmit)}> 
  <div className="modal-box">
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
    <span>Name</span>
        <br/>
         <input type ="text"
         placeholder="Enter your Name"
         {...register("name", { required: true })}
         className="w-80 px-3  border rounded-md outline-none"/>
         <br/>
         {errors.password && <span className='text-sm text-red-600'>password field is required</span>}
         <br/><br/>
     <span>E-mail</span>
         <br/>
         <input type ="email"
         {...register("email", { required: true })}
         placeholder="Enter your E-mail"
         className="w-80 px-3  border rounded-md outline-none"/>
         <br/>
         {errors.password && <span className='text-sm text-red-600'>this field is required</span>}
     </div>
    {/* {password} */}


    <div className='mt-4       space-y-2 border-b-2  '>
        <span>Password</span>
        <br/>
        <input type ="text"
        {...register("password", { required: true })}
        placeholder="Enter your password"
        className="w-80 px-3 border rounded-md outline-none"/>
        <br/>
        {errors.password && <span className='text-sm text-red-600'>this field is required</span>}
    </div>

    <div className="flex    justify-around mt-4">
        <button className='bg-pink-500 text-white rounded-md px-3 py-1'>SignUp</button>
        <p>Have Account?<button>   
        {<Login/>}</button></p>
    </div>
    <div className="modal-action">
      <div method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn  border-l-2"><Link to ="/" ><button> <span className="underline text-blue-500 cursor-pointer">Go to Home page</span></button> </Link> </button>
      </div> 
    </div> 
  </div></form>
 
    </div>
     
    // <div className='p-3  h-screen   flex flex-row justify-center items-center border-'> 
     
    // <div className='border p-5'> 
    // <div className='  '>
    //   <h1 className='font-bold'>signup</h1>
    //   <form onSubmit={handleSubmit(onSubmit)}>  
    // <div className='mt-4 space-y-2  '>
       
    //     <span>Name</span>
    //     <br/>
    //     <input type ="text"
    //     placeholder="Enter your Name"
    //     className="w-80 px-3  border rounded-md outline-none"/>
    //     <br/><br/>
    // <span>E-mail</span>
    //     <br/>
    //     <input type ="email"
    //     placeholder="Enter your E-mail"
    //     className="w-80 px-3  border rounded-md outline-none"/>
    // </div>
    // {/* {password} */}


    // <div className='mt-4       space-y-2 border-b-2  '>
    //     <span>Password</span>
    //     <br/>
    //     <input type ="text"
    //     placeholder="Enter your password"
    //     className="w-80 px-3 border rounded-md outline-none"/>
    // </div>
     
    // <div className="flex    justify-around mt-4">
    //     <button className='bg-pink-500 text-white rounded-md px-3 py-1'>SignUp</button>
    //     <p>Have Account?<button>   
    //     {<Login/>}</button></p>
    // </div>
    
    // <div className="modal-action">
    //   <div method="dialog">
    //     {/* if there is a button in form, it will close the modal */}
    //     <button className="btn  border-l-2"><Link to ="/" ><button> <span className="underline text-blue-500 cursor-pointer">Go to Home page</span></button> </Link> </button>
    //   </div> 
    // </div> 
    // <form/>
    // </div>
    // </div> </div>   
  )
}

export default Signup
