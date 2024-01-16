import React from 'react'
import imgEmily from '../../images/image-emily.jpg'
import imgThomas from '../../images/image-thomas.jpg'
import imgJennie from '../../images/image-jennie.jpg'

const Client = () => {
  return (
    <>
      <div className='mt-10 lg:py-36 py-10 bg-white'>
        <section className='lg:flex lg:flex-col'>
          <h1 className='text-center lg:text-3xl text-[#a7abae] uppercase tracking-widest'>Client testimonials</h1>

          <div className='lg:flex lg:gap-10 lg:px-20 px-10 mt-20'>
            <article className='flex flex-col items-center justify-center'>
              <img src={imgEmily} alt="Emily" className='rounded-full w-20'/>
              <p className='text-[#818498] lg:my-16 my-10 text-center'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h4 className='text-[#23303e] text-xl'>Emily R.</h4>
              <p className='text-[#a7abae]'>Marketing Director</p>
            </article>

            <article className='flex flex-col items-center justify-center mt-20 lg:mt-0'>
              <img src={imgThomas} alt="Emily" className='rounded-full w-20'/>
              <p className='text-[#818498] lg:my-16 my-10 text-center'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
              <h4 className='text-[#23303e] text-xl'>Thomas S.</h4>
              <p className='text-[#a7abae]'>Chief Operating Officer</p>
            </article>

            <article className='flex flex-col items-center justify-center mt-20 lg:mt-0'>
              <img src={imgJennie} alt="Emily" className='rounded-full w-20'/>
              <p className='text-[#818498] lg:my-16 my-10 text-center'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
              <h4 className='text-[#23303e] text-xl'>Jennie F.</h4>
              <p className='text-[#a7abae]'>Business Owner</p>
            </article>
          </div>

        </section>
      </div>
    </>
  )
}

export default Client