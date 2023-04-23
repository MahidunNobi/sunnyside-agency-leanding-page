import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div id='navSection' className='py-4 '>
        <div className='container mx-auto flex items-center justify-between relative'> 
          <div className="logo pl-3">
                  <img className='' src="./src/assets/images/logo.svg" alt="" />
          </div>  

          <ul className='hidden md:flex md:text-white md:items-center md:space-x-8 md:relative md:w-auto w-2/3 absolute top-12 right-11 md:top-0 md:right-0 bg-white rounded-2xl px-6 py-4 md:bg-transparent md:px-0 md:py-0 text-black text-center md:text-right space-y-3 md:space-y-0'>
            <li className='cursor-pointer'> About </li>
            <li className='cursor-pointer'> Service</li>
            <li className='cursor-pointer'> Project</li>
            <li className='cursor-pointer md:bg-white md:text-black md:hover:text-white md:transition md:duration-300 md:text-base md:px-4 md:py-2 md:rounded-full hidden md:block' id='contactBtn'>CONTACT</li>
            <li className='cursor-pointer md:hidden' id='contactBtn'>Contact</li>
          </ul>
          <div className="nemuBar md:hidden text-white text-2xl pr-5">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className=" container mx-auto Hero-Content flex flex-col justify-center items-center space-y-10 mt-28 ">
            <h1 id='weAreCreatives' className='md:text-7xl text-6xl text-center text-white font-fraunces font-bold md:mb-16 mb-0 tracking-widest'> WE ARE CREATIVES </h1>
            <img className='w-10' src="./src/assets/images/icon-arrow-down.svg" alt="" />
        </div>

    </div>
  )
}

export default Navbar