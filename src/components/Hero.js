import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col py-20'>
            <h1 className=' text-white text-8xl font-hero-font'>Hi, <br/> I'm  <span className='text-black'> Ehitsham </span> 
            <p className='text-2xl'>Im a full stack Developer</p>
            </h1>
            <div className='flex py-10 gap-10'>
                <a href='#'className='hover:text-white'> <AiOutlineTwitter size={50}/> </a>
                <a href='#'className='hover:text-white'> <AiOutlineFacebook size={50}/> </a>
                <a href='#'className='hover:text-white'> <AiOutlineLinkedin size={50}/> </a>
            </div>
        </div>
        <img className='md:w-1/3'  src={HeroImg}></img>
    </section>    
  )
}

export default Hero
