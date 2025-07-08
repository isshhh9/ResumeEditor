import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdWebStories } from 'react-icons/md';

function Footer() {
  return (
    <div className='md:mt-28 mt-14 py-3 flex justify-center items-center px-2 gap-4 md:justify-between md:gap-20 flex-wrap md:px-20'>
   <p className='text-lg'> © Made with ❤️ </p>
    <div className='text-xl flex items-center gap-3'>
      <a href="https://www.linkedin.com/in/ishani-nirala" target='_blank'><CiLinkedin /></a>
      <a href="mailto:ishani.nirala143@gmail.com" target='_blank'><MdEmail /></a>
      <a href="https://ishaniniralaportfolio.vercel.app/" target='_blank'><MdWebStories/></a>
      <a href="https://github.com/isshhh9" target='_blank'><FaGithub /></a>
    </div>
    </div>
  )
}

export default Footer
