import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const Navbar = () => {
  return (
    <div className="">
      <div className=''>
      <div className="navbar  bg-base-100   ml-3 mr-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </div>
    <div className=" sm:hidden"> 
    <Login  /></div>
  </div>
    <a className="font-bold cursor-pointer text-2xl ml-3">BookStore</a>
     
  <div className="navbar-end mr-3"> 
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
        
    </ul>
    
     
    <Login/>
  </div>
  <label className="input input-bordered flex items-center gap-2 mx-2">
  <input type="text" className="sm:block hidden" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label >
 
</div>
      </div>
    </div>
    <hr/>
    </div>

  )
}

export default Navbar
