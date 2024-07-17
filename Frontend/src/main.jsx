import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Course from './components/Course.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/course",
    element:<Course/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
   
    <RouterProvider router={router}/>

)
