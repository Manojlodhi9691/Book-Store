import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'; // 1. Import Axios

function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      // 2. Post request to your backend port 4000
      const res = await axios.post("http://localhost:4000/contact", contactInfo);
      
      if (res.data) {
        toast.success("Thank you! Your message has been saved.");
        
        // Redirect to Home after a short delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error: Message could not be saved.");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-white dark:bg-slate-900'>
      <form onSubmit={handleSubmit(onSubmit)} 
            className='flex flex-col justify-center relative items-center bg-slate-100 dark:bg-slate-800 w-[500px] p-10 rounded-lg shadow-md'>
        
        <Link to="/">
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bold dark:text-white px-5 py-3">
            ✕
          </button>
        </Link>

        <h1 className='text-2xl font-bold text-black dark:text-white'>Contact Us</h1>
        
        <div className='mt-4 space-y-2'>
          <span className='text-black dark:text-white'>Name</span><br/>
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