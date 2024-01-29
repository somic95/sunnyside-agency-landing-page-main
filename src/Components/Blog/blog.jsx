import React from 'react'

import imgDesktopFirst from '../../images/desktop/image-gallery-milkbottles.jpg'
import imgDesktopSecond from '../../images/desktop/image-gallery-orange.jpg'
import imgDesktopThird from '../../images/desktop/image-gallery-cone.jpg'
import imgDesktopFourth from '../../images/desktop/image-gallery-sugarcubes.jpg'

import imgMobileFirst from '../../images/mobile/image-gallery-milkbottles.jpg'
import imgMobileSecond from '../../images/mobile/image-gallery-orange.jpg'
import imgMobileThird from '../../images/mobile/image-gallery-cone.jpg'
import imgMobileFourth from '../../images/mobile/image-gallery-sugar-cubes.jpg'


const Blog = () => {
  return (
    <>
      <div>
         <section className='desktop lg:grid lg:grid-cols-4 hidden'>
            <img src={imgDesktopFirst} alt="milkbottles" />
            <img src={imgDesktopSecond} alt="orange" /> 
            <img src={imgDesktopThird} alt="cone" />
            <img src={imgDesktopFourth} alt="sugarcubes" />
         </section>

         <section className='tablet lg:hidden md:grid md:grid-cols-2 hidden'>
            <img src={imgDesktopFirst} alt="milkbottles" />
            <img src={imgDesktopSecond} alt="orange" /> 
            <img src={imgDesktopThird} alt="cone" />
            <img src={imgDesktopFourth} alt="sugarcubes" />
         </section>

         <section className='mobile lg:hidden md:hidden grid grid-cols-2'>
            <img src={imgMobileFirst} alt="milkbottles" />
            <img src={imgMobileSecond} alt="orange" /> 
            <img src={imgMobileThird} alt="cone" />
            <img src={imgMobileFourth} alt="sugarcubes" />
         </section>
      </div>
    </>
  )
}

export default Blog
