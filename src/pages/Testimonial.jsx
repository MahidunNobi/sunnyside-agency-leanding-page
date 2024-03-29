import React from 'react'
import MildBottels from "../assets/images/mobile/image-gallery-milkbottles.jpg"
import Orange from "../assets/images/mobile/image-gallery-orange.jpg"
import Cone from "../assets/images/mobile/image-gallery-cone.jpg"
import Cubes from "../assets/images/mobile/image-gallery-sugar-cubes.jpg"

import MildBottelsDex from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import OrangeDex from "../assets/images/desktop/image-gallery-orange.jpg"
import ConeDex from "../assets/images/desktop/image-gallery-cone.jpg"
import CubesDex from "../assets/images/desktop/image-gallery-sugarcubes.jpg"

import emily from "../assets/images/image-emily.jpg"
import thomas from "../assets/images/image-thomas.jpg"
import jennie from "../assets/images/image-jennie.jpg"



// 
// import OrangeDex from "../assets/images/dextop/image-gallery-orange.jpg"
// import ConeDex from "../assets/images/dextop/image-gallery-cone.jpg"
// import CubesDex from "../assets/images/dextop/image-gallery-sugar-cubes.jpg"

const Testimonial = () => {

    function singleTestimonial(imgLink, quate, name, post){
       return (<div className="singleTastimonials text-center px-6 flex flex-col justify-around items-center h-96 lg:w-1/3">
                <div className=' w-20 overflow-hidden rounded-full'> <img className='w-full' src={imgLink} alt="" /> </div>
                <p className=' leading-8 px-12 lg:px-0 text-xl text-darkGrayishBlue'>{quate} </p>
                <div className="bottomTxt">
                    <h3 className='font-frauces text-xl'> {name} </h3>

                    <p className=' text-grayishBlue'>{post} </p>
                </div>

            </div>)
    }

  return (
    <div className=''>

      <div className='container mx-auto pt-20'>
            <h1 id='cliendTestimonials' className=' mb-6 font-fraunces text-center text-grayishBlue uppercase'>Client testimonials  </h1>
            <div className="testimonials lg:flex pb-20">
                {singleTestimonial(emily, "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", "Emily R.", "Marketing Director")}

                {singleTestimonial(thomas, "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.", " Thomas S.", "Chief Operating Officer")}

                {singleTestimonial(jennie, "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", "Jennie F.", "Business Owner")}
            </div>
            <div className="bottomImagesMobile lg:hidden">
              <img className='w-1/2 inline' src={MildBottels} alt="" />
              <img className='w-1/2 inline' src={Orange} alt="" />
              <img className='w-1/2 inline' src={Cone} alt="" />
              <img className='w-1/2 inline' src={Cubes} alt="" />
            
            </div>
         </div>

        <div className="bottomImagesMobile hidden lg:flex ">
          <img className='w-1/4 block' src= {MildBottelsDex} alt="" />
          <img className='w-1/4 block' src= {OrangeDex} alt="" />
          <img className='w-1/4 block' src= {ConeDex} alt="" />
          <img className='w-1/4 block' src={CubesDex} alt="" />
         
        </div>
    </div>
  )
}

export default Testimonial