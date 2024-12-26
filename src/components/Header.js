import React, { useState } from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'

const Header = () => {

    const [toggleMenu,settogglemenu] = useState();

  return (
    <>
      <header className='flex justify-between px-5 py-2 bg-secondary'>
        <a className='font-bold text-black' href='#'>Ehitsham</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
                <li className='hover:text-gray-400'><a href='#'>Home</a></li>
                <li className='hover:text-gray-400'><a href='#about'>About</a></li>
                <li className='hover:text-gray-400'><a href='#projects'>Projects</a></li>
                <li className='hover:text-gray-400'><a href='#resume'>Resume</a></li>
                <li className='hover:text-gray-400'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden '>
            <ul onClick={() => settogglemenu(!toggleMenu)}  className='flex flex-col text-white mobile-nav'>
                <li className='hover:text-gray-400'><a href='#'>Home</a></li>
                <li className='hover:text-gray-400'><a href='#about'>About</a></li>
                <li className='hover:text-gray-400'><a href='#projects'>Projects</a></li>
                <li className='hover:text-gray-400'><a href='#resume'>Resume</a></li>
                <li className='hover:text-gray-400'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>}        
        <button onClick={() => settogglemenu(!toggleMenu)} className='block md:hidden cursor-pointer'><Bars3Icon className='text-white h-5' /></button>
      </header>
    </>
  )
}

export default Header

