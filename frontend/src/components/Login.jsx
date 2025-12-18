import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    const {
    register,
    handleSubmit,
   formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      
           email:data.email,
           password:data.password,
        };
       await axios.post("http://localhost:4000/user/login",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
           toast.success("logged in Successfully");
            document.getElementById("my_modal_3").close();
           setTimeout(() => {
           
            window.location.reload();
            localStorage.setItem("users",JSON.stringify(res.data.user));
           }, 3000);
           
           
          }
          
        }).catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message)
            setTimeout(() => {
              
            }, 3000);
          }
          
        })
  }

  return (
   
  

<div >
 <dialog id="my_modal_3" className="modal ">
    <div className="modal-box bg-white relative">
    <form  onSubmit={handleSubmit(onSubmit)} method='dialog'>
    <Link to="/">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bold "
    onClick={()=>document.getElementById("my_modal_3").close()}>
      ✕</button>
    </Link>
      
  
    <h3 className="font-bold text-bold">Login</h3>
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
             placeholder='Enter your password' 
             className='w-80 px-3 py-1 border rounded-md outline-none' 
            {...register("password", { required: true })}
            /><br/>
             {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
  </div>
  <div className='mt-6 space-x-6 flex justify-around'>
   
    <button type="submit" className='px-3 py-1 rounded-md bg-pink-500 text-white hover:bg-pink-700'
    onClick={()=>document.getElementById("my_modal_3").close()}>Login</button>
    
    <p>Not registered? 
        <Link to="/signup"
        className='cursor-pointer text-blue-500 '
        >
        Signup
        </Link>
    </p>
  </div>
</form>
</div>
  
</dialog>
   </div>
   
  );
}

export default Login