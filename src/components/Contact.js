import React from 'react'
import ResumeImg from '../assets/resume.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";


const Contact = () => {
  return (
    <>
    <section className='flex flex-col bg-primary px-5 py-32' id='contact'> 
      <div className='flex flex-col items-center text-white'>
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold border-secondary'>Contact</h1>
        <p className='pb-5'>
            If you want to discuss more in detail, please contact me.
        </p>
        <p className='py-2'><span className='font-bold'>Email : </span>ehthisham900@gmail.com</p>
        <p className='py-2'><span className='font-bold'>Phone : </span>+91 9940177808</p>
      </div>
    </section>
    </>
  )
}

export default Contact
