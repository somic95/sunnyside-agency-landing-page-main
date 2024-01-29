import React from 'react'
import desktopEgg from '../../images/desktop/image-transform.jpg'
import mobileEgg from '../../images/mobile/image-transform.jpg'
import desktopGlass from '../../images/desktop/image-stand-out.jpg'
import mobileGlass from '../../images/mobile/image-stand-out.jpg'
import desktopGraphic from '../../images/desktop/image-graphic-design.jpg'
import mobileGraphic from '../../images/mobile/image-graphic-design.jpg'
import desktopPhotoGr from '../../images/desktop/image-photography.jpg'
import mobilePhotoGr from '../../images/mobile/image-photography.jpg'

const Article = () => {
  return (
    <>
      <div className='bg-white'>
        <section className='lg:flex lg:flex-row-reverse'>
          <picture className='lg:w-1/2 flex flex-col justify-center '>
            <source media='(min-width: 1024px)' srcSet={desktopEgg}/>
            <img src={mobileEgg} />
          </picture>
          <article className='lg:w-1/2 lg:p-14 xl:p-40 py-16 flex flex-col gap-10'>
            <h1 className='lg:text-5xl text-3xl lg:text-left text-center lg:px-0 px-16'>Transform your brand</h1>
            <p className='text-[#818498] lg:text-left text-center px-8 lg:px-0'>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <h4 className='uppercase text-lg tracking-widest lg:text-left text-center cursor-pointer hover:text-[#818498] hover:animate-jump active:text-black'>Learn more</h4>
          </article>
        </section>

        <section className='lg:flex'>
          <picture className='lg:w-1/2 flex flex-col justify-center'>
            <source media='(min-width: 1024px)' srcSet={desktopGlass}/>
            <img src={mobileGlass} />
          </picture>
          <article className='lg:w-1/2 lg:p-14 xl:p-40 py-16 flex flex-col gap-10'>
            <h1 className='lg:text-5xl text-3xl lg:text-left text-center lg:px-0 px-16'>Stand out to the right audience</h1>
            <p className='text-[#818498] lg:text-left text-center px-8 lg:px-0'>Using a collaborative formula of 
                    designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <h4 className='uppercase text-lg tracking-widest lg:text-left text-center cursor-pointer hover:text-[#818498] hover:animate-jump active:text-black'>Learn more</h4>
          </article>
        </section>

        <section className='lg:flex'>
          <div>
            <picture className='lg:w-1/2 h-screen max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:justify-center'>
              <source media='(min-width: 768px)' srcSet={desktopGraphic}/>
              <img src={mobileGraphic} />
            </picture>
            <div className='flex flex-col gap-10 -mt-48 pb-10 lg:pb-0 text-center text-[#25564b]'>
              <h1 className='text-4xl'>Graphic Design</h1>
              <div className='gap-0'>
                <p className=''>Great design makes you memorable. We deliver </p>
                <p className=''>artwork that underscores your brand message</p>
                <p className=''>and captures potential clients’ attention.</p>
              </div>
            </div>
          </div>

          <div>
            <picture className='lg:w-1/2 max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:justify-center'>
              <source media='(min-width: 768px)' srcSet={desktopPhotoGr}/>
              <img src={mobilePhotoGr} />
            </picture>
            <div className='flex flex-col gap-10 -mt-48  text-center text-[#19536b]'>
              <h1 className='text-4xl'>Photography</h1>
              <div className='gap-0'>
                <p className=''>Increase your credibility by getting the most</p>
                <p className=''>stunning, high-quality photos that improve your</p>
                <p className=''>business image.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Article
