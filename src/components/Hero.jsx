import React from 'react';
import { Background } from '../assets';
import { Button } from './Button';
import BoxReveal from './BoxReveal';

export const Hero = () => {
  return (
    <>
      <section className='relative h-screen w-full bg-cover bg-center rounded-b-[100px] overflow-hidden' style={{ backgroundImage: `url(${Background})`}}>
        <div className='circlePosition w-[300px] h-[150px] md:w-[970px] md:h-[400px] bg-custom-blue rounded-[100%] absolute z-1 top-[-10%] md:top-[-10%] left-[-10%] md:left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[90px]' />

        <div className="absolute top-[3%] md:top-[120px] left-[5%] md:left-[279px] max-w-[90%] md:max-w-3xl h-auto text-center md:text-left">
          <BoxReveal boxColor={"#6881FF"} duration={0.5}>
            <h1 className="text-white text-4xl md:text-6xl leading-tight">
              Empowering Lives Through <br />
              Innovative {""} <span className="relative inline-block text-white font-bold">
                AI
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 transform translate-y-1" style={{ width: '95%', height: '10%' }}></span>
              </span> {""} Technologies.
            </h1>
          </BoxReveal>
        </div>

        <div className='absolute top-[33%] md:top-[265px] left-[5%] md:left-[279px] w-[90%] md:w-[900px]'>
          <p className='text-[#C0C2CC] text-xl md:text-2xl text-center md:text-left'>
            Finding new horizons for visionaries to accelerate their innovation and progress.
          </p>
        </div>

        <div className='absolute top-[49%] md:top-[320px] left-[5%] md:left-[279px] flex flex-col md:flex-row gap-4 justify-center md:justify-start w-[90%] md:w-auto'>
          <Button variant='filled'>
            <p className='text-bold p-3 w-full md:w-[219px] text-center'>Explore Our Services</p>
          </Button>

          <Button variant='outline'>
            Learn more
          </Button>
        </div>

        <div className="absolute top-[70%] md:top-[485px] left-[5%] md:left-[279px] w-[90%] md:w-[1100px]">
          <p className="text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] text-center md:text-left">
            From Ideas to Software Solutions 
            <span className="text-[#1C1C1C]"> 💡✨ </span>
            From Ideas to Software Solutions 
            <span className="text-[#1C1C1C]"> 🌟✨ </span>
            From Ideas to
          </p>
        </div>

      </section>
    </>
  );
};
