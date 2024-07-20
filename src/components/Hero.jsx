import React from 'react'
import { Background } from '../assets'
import { Button } from './Button'

export const Hero = () => {
  return (
    <>
    <section className='relative h-screen w-full bg-cover bg-center rounded-b-[100px]' style={{ backgroundImage: `url(${Background})` }}>
        <div className='circlePosition w-[970px] h-[400px] bg-custom-blue rounded-[100%] absolute z-1 top-[-15%]
        left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[90px]
        '>
        </div>

        <div className="absolute top-[120px] left-[279px] max-w-3xl h-[123px]">
            <h1 className="text-white text-6xl">Empowering Lives Through <br/>
            Innovative {" "} <span className="relative inline-block text-white font-bold">
                AI
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 transform translate-y-1" style={{ width: '95%', height: '10%' }}></span>
            </span> {" "} Technologies.
            </h1>
        </div>

        <div className='absolute top-[265px] left-[279px] w-[900px]'>
            <p className='text-[#C0C2CC] text-2xl'>Finding new horizons for visionaries to accelerate their innovation and progress.</p>
        </div>

        <div className='absolute top-[320px] left-[279px] flex gap-4'>
            <Button variant='filled'>
                <p className='text-bold p-3 w-[239px]'>Explore Our Services</p>
            </Button>

            <Button variant='outline'>
                Learn more
            </Button>
        </div>

        <div className="absolute top-[485px] left-[279px] w-[1100px]">
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C]">
            From Ideas to Software Solutions 
            <span className="text-[#1C1C1C]"> 💡✨ </span>
            From Ideas to Software Solutions 
            <span className="text-[#1C1C1C]"> 🌟✨ </span>
            From Ideas to
          </p>
        </div>
    </section>
    </>
  )
}
