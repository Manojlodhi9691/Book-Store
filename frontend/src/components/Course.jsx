import React, { useState } from 'react'
import Cards from './Cards';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import axios from 'axios'


function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
const getBook = async()=>{
  try {
      const res= await axios.get("http://localhost:4000/book")
       console.log(res.data)
       setBook(res.data)
      } 
      catch (error) {
     console.log(error)
      }
     };
     getBook();
},[])
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 itmes-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you here</h1>
        <p className='mt-12 px-2'>Explore our wide range of textbooks and study materials tailored specifically for your exam success. Our collection is curated by experts to ensure you have the most relevant and up-to-date information at your fingertips, helping you bridge the gap between hard work and top results.</p>
     <Link to="/">
           <button  className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6'>Back</button>
     </Link>

    
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4 overflow-visible'>
        { book.map((item)=>{
              return <Cards key={item.id} item={item}/>
        })

        }
     </div>
    </div>
   </>
  )
}

export default Course