import React from 'react'

const Testimonial = () => {

    function singleTestimonial(imgLink, quate, name, post){
       return (<div className="singleTastimonials text-center px-6 flex flex-col justify-around items-center h-96 lg:w-1/3">
                <div className=' w-20 overflow-hidden rounded-full'> <img className='w-full' src={`./src/assets/images/${imgLink}`} alt="" /> </div>
                <p className=' leading-8 px-12 lg:px-0 text-xl text-darkGrayishBlue'>{quate} </p>
                <div className="bottomTxt">
                    <h3 className='font-frauces text-xl'> {name} </h3>

                    <p className=' text-grayishBlue'>{post} </p>
                </div>

            </div>)
    }

  return (
    <div className=''>

      <div className='container mx-auto py-20'>
            <h1 id='cliendTestimonials' className=' mb-6 font-fraunces text-center text-grayishBlue uppercase'>Client testimonials  </h1>
            <div className="testimonials lg:flex">
                {singleTestimonial("image-emily.jpg", "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", "Emily R.", "Marketing Director")}

                {singleTestimonial("image-thomas.jpg", "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.", " Thomas S.", "Chief Operating Officer")}

                {singleTestimonial("image-jennie.jpg", "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", "Jennie F.", "Business Owner")}
            </div>
            <div className="bottomImagesMobile lg:hidden">
              <img className='w-1/2 inline' src="./src/assets/images/mobile/image-gallery-milkbottles.jpg" alt="" />
              <img className='w-1/2 inline' src="./src/assets/images/mobile/image-gallery-orange.jpg" alt="" />
              <img className='w-1/2 inline' src="./src/assets/images/mobile/image-gallery-cone.jpg" alt="" />
              <img className='w-1/2 inline' src="./src/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
            
            </div>
         </div>

        <div className="bottomImagesMobile hidden lg:flex ">
          <img className='w-1/4 block' src="./src/assets/images/mobile/image-gallery-milkbottles.jpg" alt="" />
          <img className='w-1/4 block' src="./src/assets/images/mobile/image-gallery-orange.jpg" alt="" />
          <img className='w-1/4 block' src="./src/assets/images/mobile/image-gallery-cone.jpg" alt="" />
          <img className='w-1/4 block' src="./src/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
         
        </div>
    </div>
  )
}

export default Testimonial