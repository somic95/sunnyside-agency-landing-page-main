import React from 'react'
import headerMobile from '../../images/mobile/image-header.jpg'
import headerDesktop from '../../images/desktop/image-header.jpg'
import arrowDown from '../../images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <>
      <picture>
        <div className='flex flex-col justify-center items-center'>
          <div>

            <picture className='relative'>
             <source media='(min-width: 1024px)' srcSet={headerDesktop}/>
             <img src={headerMobile} />
            </picture>
            
            <img src={arrowDown} alt="arrow-down" className='absolute left-[45%] top-[37%] lg:left-1/2 lg:top-[55%]'/>
            <h1 className='absolute top-28 translate-y-1/2 lg:top-48 lg:translate-x-1/3 uppercase text-white lg:text-7xl text-4xl text-center leading-loose tracking-widest'>We are creatives</h1>
          
          </div>
        </div>
      </picture>
    </>
  )
}

export default Hero