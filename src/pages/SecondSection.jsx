import React from 'react'

function SecondSection() {
  return (
    <> 
    {/* .....................Second Section........................... */}
      <div className='w-full lg:flex lg:flex-row-reverse
      '>
          <div className='lg:w-1/2' >
              <img className='lg:block hidden w-full' src="./src/assets/images/desktop/image-transform.jpg" alt="" />
              <img className='lg:hidden block w-full' src="./src/assets/images/mobile/image-transform.jpg" alt="" />
          </div>

          <div className='lg:w-1/2 flex flex-col space-y-9 py-9 m-auto px-6 text-center items-center lg:text-left lg:px-24 lg:items-start'>            
              <h1 className='text-6xl font-fraunces'>  Transform your brand</h1>
              <p className='text-xl leading-8 text-darkGrayishBlue'>  We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you. </p>
          <a href="#" id='' className='secondSectionLearn relative inline-block text-xl font-fraunces text-center'> 
            
              <p className=' z-10'>  Learn More </p>
              <div id='BtnUnderLine' className='  w-full h-2 rounded-3xl transition duration-300 '></div>
          </a>
      </div>
          
          

      </div>
      {/*....................Third Section..........................marker: */}

      <div className='w-full lg:flex'>
          <div className='lg:w-1/2' >
              <img className='lg:block hidden w-full' src="./src/assets/images/desktop/image-stand-out.jpg" alt="" />
              <img className='lg:hidden block w-full' src="./src/assets/images/mobile/image-stand-out.jpg" alt="" />
          </div>

          <div className='lg:w-1/2 flex flex-col space-y-9 py-9 m-auto px-6 text-center lg:text-left lg:px-24 , lg:items-start items-center'>            
              <h1 className='text-6xl font-fraunces'>   Stand out to the right audience</h1>
              <p className='text-xl leading-8 text-darkGrayishBlue'>  
  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.  </p>
          <a href="#" id='' className='secondSectionLearn2 relative inline-block text-xl font-fraunces'> 
            
              <p className=' z-10'>  Learn More </p>
              <div id='BtnUnderLine2' className=' w-full h-2 rounded-3xl transition duration-300'></div>
          </a>
      </div>
      
       
          
          

      </div>

      {/*....................Fourth Section..........................marker: */}
      
      <div className='w-full lg:flex '>
          <div className='lg:w-1/2 relative' >
              <img className='lg:block hidden w-full' src="./src/assets/images/desktop/image-graphic-design.jpg" alt="" />
              <img className='lg:hidden block w-full' src="./src/assets/images/mobile/image-graphic-design.jpg" alt="" />
              <div className='absolute bottom-16 text-center lg:px-32 px-6'>
                <h2 className=' font-fraunces text-4xl text-darkDesaturatedCyan font-bold mb-8'> Graphic design </h2>
                <p className=' text-xl leading-8 text-darkDesaturatedCyan'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
 </p>
              </div>
          </div>
          <div className='lg:w-1/2 relative' >
              <img className='lg:block hidden w-full' src="./src/assets/images/desktop/image-photography.jpg" alt="" />
              <img className='lg:hidden block w-full' src="./src/assets/images/mobile/image-photography.jpg" alt="" />
              <div className='absolute bottom-16 text-center lg:px-32 px-6'>
                <h2 className=' font-fraunces text-4xl text-darkDesaturatedCyan font-bold mb-8'> Photography </h2>
                <p className=' text-xl leading-8 text-darkDesaturatedCyan'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
 </p>
              </div>
          </div>

          
      </div>

    </>
    
  )
}

export default SecondSection