import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
      
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4000/user/login",userInfo)
    .then((res)=>{
      toast.success('Successfully login!');
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
    <div className=''>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Login</button>
<dialog id="my_modal_1" className="modal">
  <form onSubmit={handleSubmit(onSubmit)}> 
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type ="email"
        {...register("email", { required: true })}
        placeholder="Enter your Email"
        className="w-80 px-3 border rounded-md outline-none"/><br/>
        {errors.email && <span className='text-sm text-red-600'>email field is required</span>}
    </div>
    {/* {password} */}


    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type ="text"
        {...register("password", { required: true })}
        placeholder="Enter your password"
        className="w-80 px-3 border rounded-md outline-none"/><br/>
        {errors.password && <span className='text-sm text-red-600'>password field is required</span>}
    </div>
     

    <div className="flex justify-around mt-4">
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 ' type="submit">Login</button>
        <p>Not registered?<Link to ="/signup" ><span className="underline text-blue-500 cursor-pointer">SignUp</span> </Link></p>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form> 
    </div>
  </div></form>
</dialog>
    </div>
  )
}

export default Login
