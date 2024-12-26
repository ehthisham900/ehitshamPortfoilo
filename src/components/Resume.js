import React from 'react'
import ResumeImg from '../assets/resume.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";


const Resume = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row  bg-secondary p-10' id='resume'>      
      <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img className='w-[500px]' src={ResumeImg}></img>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>  
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold border-primary '>Resume</h1>          
            <p className='text-white'>
                You can view by resume     
                <a href='#'className='btn'>Download</a>
            </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume
