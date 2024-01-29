import React from 'react'
import logoSunnyside from '../../images/logo.svg'

import { useState } from 'react'

const navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='p-10 bg-[#3ebfff]'>

        <nav className='flex justify-between items-center cursor-pointer'>

          <picture>
            <img src={logoSunnyside} alt="logo" />
          </picture>

          <ul className='nav-menu-desktop hidden lg:flex items-center flex-col lg:flex-row lg:gap-14'>
            <li className='hover:text-gray-500 active:text-black'>About</li>
            <li className='hover:text-gray-500 active:text-black'>Services</li>
            <li className='hover:text-gray-500 active:text-black'>Projects</li>
            <h4 className='lg:bg-white hover:bg-opacity-50 hover:text-white hover:animate-shake active:text-black rounded-full px-7 py-4 uppercase'>Contact</h4>
          </ul>

          <div className='lg:hidden block z-10'>     
            <button onClick={handleToggle}>
                <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                <path className='hover:opacity-50' d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
            </button>
            {isOpen && (
              <div>
                <ul className='nav-menu-mobile absolute bg-white flex flex-col items-center justify-center py-8 px-16 gap-6 -translate-x-[91.6%] translate-y-[24%]'>
                  <li className='text-[#818498]'>About</li>
                  <li className='text-[#818498]'>Services</li>
                  <li className='text-[#818498]'>Projects</li>
                  <h4 className='bg-yellow-400 hover:bg-opacity-50 hover:text-white rounded-full px-7 py-4 uppercase'>Contact</h4>
                </ul>

                <div class="triangle lg:hidden absolute -translate-x-1/4 translate-y-[55%]"></div>
              </div>
            )}
          </div>

        </nav>

      </header>
    </>
  )
}

export default navbar
