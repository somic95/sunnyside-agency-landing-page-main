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

            <picture>
             <source media='(min-width: 768px)' srcSet={headerDesktop}/>
             <img src={headerMobile} />
            </picture>
            
            <img src={arrowDown} alt="arrow-down" className='absolute -translate-x-1/2 -translate-y-1/2 top-[75%] md:top-[55%] xl:top-[60%] left-1/2'/>
            <h1 className='absolute md:w-full -translate-x-1/2 -translate-y-1/2 md:-translate-y-[180%] lg:-translate-y-[300%] top-1/2 left-1/2 uppercase text-white xl:text-7xl lg:text-5xl text-4xl text-center leading-loose tracking-widest'>We are creatives</h1>
          
          </div>
        </div>
      </picture>
    </>
  )
}

export default Hero
