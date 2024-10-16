import React from 'react'
import Profile from './assets/Profile2.avif'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import resume from './assets/Frontend_Resume (2).pdf'



const Card = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-cyan-200 to-blue-300 flex justify-center items-center'>
        <div className='w-[280px] h-auto bg-gradient-to-b from-gray-900 to-gray-700 p-4 rounded-[20px] flex flex-col justify-center items-center'> 
            <img src={Profile} alt="" className='rounded-[100%]  border-violet-600 border-4 w-36'/>
            <h3 className='pt-4 font-bold text-xl text-white'>Im Nandhakumar</h3>
            <h2 className='pt-1 font-semibold text-2xl text-violet-600'>Frontend Developer</h2>
            <div className='flex gap-4 m-4'>
                <a href="https://github.com/nandhakumargk">
                  <FaGithub className='w-8 h-8 bg-black text-white rounded-[100%] p-1 hover:cursor-pointer hover:bg-green-500 hover:text-black'/>
                </a>
                <a href="https://www.linkedin.com/in/nandhakmargk/">
                  <IoLogoLinkedin className='w-8 h-8  bg-black text-white rounded-[100%] p-1 hover:cursor-pointer hover:bg-blue-900'/>
                </a>
                <a href="mailto:inandhakumargk@gmail.com" target='_blank'>
                  <BiLogoGmail className='w-8 h-8  bg-black text-white rounded-[100%] p-1 hover:cursor-pointer hover:bg-white hover:text-pink-600'/>
                </a>
            </div>
            <a href={resume} download="Resume.pdf" >
               <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full font-semibold text-white'>Download CV</button>
            </a>
        </div>
    </div>
  )
}

export default Card