import Home from "../public/Home/Homee";
import Course from "./components/Course";
import toast, { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <div className="overflow-y-hidden">
     <Home/>
   
       <Toaster/>
     </div>
      
  )
}