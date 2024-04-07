import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3 ">
        <img 
        src={logo}
        alt="logo" 
        className="w-56 object-contain" 
       />
        <button 
        type='button'
        onClick={()=> window.open('https://github.com/')}
        className="black_btn">Github</button>
      </nav>
      <h1 className="head_text">Résumer des articles avec <br className="max-md:hidden" /> <span className='purple_gradient'>OpenAI GPT-4</span></h1>
      <h2 className="desc">
      Facilitez votre lecture avec TextDigest, un outil convivial qui résume les articles longs en résumés clairs et concis.
      </h2>

    </header>
  )
}

export default Hero