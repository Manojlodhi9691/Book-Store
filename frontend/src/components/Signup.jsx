import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function Signup() {
    const location = useLocation();
    const navigate=useNavigate();
    const from= location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo ={
           fullname:data.fullname,
           email:data.email,
           password:data.password,
        };
       await axios.post("http://localhost:4000/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
           toast.success("Loggedin Succssfully");
           navigate(from ,{replace:true});
          }
          localStorage.setItem("u sers",JSON.stringify(res.data.user));
        }).catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message)
          }
          
        })
      };
  return (
  
  <div className='flex justify-center items-center h-screen w-90 h-50 bg-slate-800'>
    <div  className="w-[600px]">
  <div className="modal-box bg-white relative "> 
    <form  onSubmit={handleSubmit(onSubmit)}>
    <Link to="/">
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bold">✕</button>
    </Link>

    
    <h3 className="font-bold text-bold">Signup</h3>
    <div className='mt-4 space-y-2'>
     <span>Name</span>
     <br/>
     <input type="text" 
            name='fullname' 
            placeholder='Enter your full name' 
            className='w-80 px-3 py-1 border rounded-md outline-none' 
             {...register("fullname", { required: true })}
        /><br/>
         {errors.fullname && <span  className='text-sm text-red-500'>This field is required</span>}
         
  </div>
    
    <div className='mt-4 space-y-2'>
     <span>Email</span>
     <br/>
     <input type="email" 
            name='email' 
            placeholder='manoj@gmail.com' 
            className='w-80 px-3 py-1 border rounded-md outline-none' 
             {...register("email", { required: true })}
        /><br/>
         {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
         
  </div>
  <div className='mt-4 space-y-2'>
     <span>Password</span>
     <br/>
     <input type="password" 
            name='password' 
            placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' 
             {...register("password", { required: true })}
        /><br/>
         {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
         
  </div>
  <div className='mt-6 space-x-6 flex justify-around'>
    <button className='px-3 py-1 rounded-md bg-pink-500 text-white hover:bg-pink-700'>Signup

    </button>
    <div className='text-xl'>Have account?{" "} 
        <button
        className='cursor-pointer text-blue-500 '
        onClick={()=>
            document.getElementById("my_modal_3").showModal()
        }
        >
        Login
        </button>
        
        </div>
        
  </div>
</form>
    
  </div>
   <Login/>
    </div>
  </div>
  
  )
}

export default Signup;