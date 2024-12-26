import React from 'react'
import ecommerceWebImg from '../assets/ecommerce-websites.jpg'
import FoodEcommerceImg from '../assets/food-ecommerce.jpg'
import WebsiteBlogImg from '../assets/website-blog.jpg'

const Projects = () => {
  return (
    <section className='flex flex-col py-20 p-5 justify-center bg-primary text-white' id='projects'>
      <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold border-secondary'>Projects</h1>
            <p>These are my some of best project which I have built it using React, Check them out</p>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-10'>
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={ecommerceWebImg}></img>
                <div className='Project-discription'>
                <p className='text-center p-10'>A Ecommerce Website, Built with MERN Stack</p>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={FoodEcommerceImg}></img>
                <div className='Project-discription'>
                    <p className='text-center p-10'>Food Ecommerce website like Bwiggy, Built with Angular</p>
                </div>                
            </div>
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={WebsiteBlogImg}></img>
                <div className='Project-discription'>
                    <p className='text-center p-10'>Basic Blog Website, Bult with Next JS and Monga DB</p>
                </div>                
            </div>
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={WebsiteBlogImg}></img>
                <div className='Project-discription'>
                    <p className='text-center p-10'>Basic Blog Website, Bult with Next JS and Monga DB</p>
                </div>                
            </div>    
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={WebsiteBlogImg}></img>
                <div className='Project-discription'>
                    <p className='text-center p-10'>Basic Blog Website, Bult with Next JS and Monga DB</p>
                </div>                
            </div>                    
        </div>
      </div>
    </section>
  )
}

export default Projects
