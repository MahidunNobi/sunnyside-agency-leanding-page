import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-darkModerateCyan  py-16'>
      <div className="container mx-auto flex flex-col justify-center items-center space-y-8">

      
          <div className="logo text-darkDesaturatedCyan w-52">
            <img className=' w-full' src="./src/assets/images/logo.svg" alt="" />
          </div>

          <div className="links text-darkDesaturatedCyan">
            <a className='mx-6' href="#"> About </a>
            <a className='mx-6' href="#"> Service </a>
            <a className='mx-6' href="#"> Project </a>
          </div>

          <div className="social flex space-x-7">
            <img className='cursor-pointer' src="./src/assets/images/icon-facebook.svg" alt="" />
            <img className='cursor-pointer' src="./src/assets/images/icon-instagram.svg" alt="" />
            <img className='cursor-pointer' src="./src/assets/images/icon-twitter.svg" alt="" />
            <img className='cursor-pointer' src="./src/assets/images/icon-pinterest.svg" alt="" />
          </div>

    </div>  
    

    </div>
  )
}

export default Footer