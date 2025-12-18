import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    
    console.log(data); 
    
  
    toast.success("Thank you! Your message has been sent.");
    
    // 2. Redirect to Home after a short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-white dark:bg-slate-900'>
    
      <form onSubmit={handleSubmit(onSubmit)} 
            className='flex flex-col justify-center relative items-center bg-slate-100 dark:bg-slate-800 w-[500px] p-10 rounded-lg shadow-md'>
        <Link to="/">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bold text-white px-5 py-3 "
    onClick={()=>document.getElementById("my_modal_3").close()}>
      ✕</button>
    </Link>
        <h1 className='text-2xl font-bold text-black dark:text-white'>
          Contact Us
          </h1>
        
        <div className='mt-4 space-y-2'>
          <span className='text-black dark:text-white'>
            Name</span><br/>
          <input 
            type="text" 
            placeholder='Enter your full name' 
            className='w-80 px-3 py-1 border rounded-md outline-none text-black' 
            {...register("name", { required: true })}
          />
          {errors.name && <p className='text-red-500 text-sm'>Name is required</p>}
        </div>

        <div className='mt-4 space-y-2'>
          <span className='text-black dark:text-white'>Email</span><br/>
          <input 
            type="email" 
            placeholder='manoj@gmail.com' 
            className='w-80 px-3 py-1 border rounded-md outline-none text-black' 
            {...register("email", { required: true })}
          />
          {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
        </div>

        <div className='mt-4 space-y-2'>
          <span className='text-black dark:text-white'>Message</span><br/>
          <textarea 
            className='w-80 px-3 py-1 border rounded-md outline-none text-black' 
            placeholder='Type your message'
            rows="4"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <p className='text-red-500 text-sm'>Message is required</p>}
        </div>

        <button 
          type='submit' 
          className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 duration-300 mt-8'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;