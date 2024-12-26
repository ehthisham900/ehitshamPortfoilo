import React from 'react'
import AboutImg from '../assets/about.png'
import { FaAngleDoubleRight } from "react-icons/fa";


const About = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
      <div className='md:w-1/2 py-5'>
        <img src={AboutImg}></img>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold border-primary'>About Me</h1>
            <p className='text-white'>
                My name is Ehitsham, and I am a skilled software developer with expertise in building and automating solutions across various platforms. My areas of proficiency include:
            </p>
            <ul className='text-white pt-5'>
                <li className='flex items-center gap-3'><FaAngleDoubleRight/>Website Development: Utilizing cutting-edge technologies for seamless, user-friendly designs.</li>
                <li className='flex items-center gap-3'><FaAngleDoubleRight/>Automation: Proficient in Excel VBA, Power Apps, Power Automate, Power BI, and UI Path to streamline workflows and boost efficiency.</li>
                <li className='flex items-center gap-3'><FaAngleDoubleRight/>Database Management: Experienced in SQL Server for robust database solutions.
                Cloud Computing: Skilled in AWS Athena for scalable and cost-effective data querying.</li>
            </ul>
                                
            <p className='text-white pt-5'>
                Let’s connect to collaborate on innovative solutions that drive digital transformation!
            </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
