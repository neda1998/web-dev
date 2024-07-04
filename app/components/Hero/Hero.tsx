import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed'
import HeroImg from '@/public/hero.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] sm:h-[75vh] flex items-center flex-col justify-center'>
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
            <div className="col-span-2">
                <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
                    Exploring Innovation Paths to Cultivate Business
                </h1>
                <p className='md:text-[17px text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat ut nesciunt numquam quam, voluptatum quasi veniam minima laboriosam eum.</p>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <ButtonBlue text="Get Dtarted" />
                    <ButtonRed text="Explor Features" />
                </div>
            </div>
            <div className="hidden sm:block col-span-3">
                <Image src={HeroImg} alt="hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero