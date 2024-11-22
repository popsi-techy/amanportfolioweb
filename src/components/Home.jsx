import React from 'react';
import image from '../../public/image.jpg';
import { BiLogoBehance, BiLogoGithub, BiLogoLinkedin, BiLogoMedium } from 'react-icons/bi';

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex w-full flex-col items-center justify-center gap-8 p-5 text-center md:flex-row md:text-left md:items-start lg:gap-32'> 
        {/* Left Content */}
        <div className='flex flex-col items-center md:items-start gap-8'>
          <div className='space-y-1 sm:space-y-3'>
            <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>
              Aman Kumar
            </h1>
            <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>
              Web Developer
            </h3>
            <p className='max-w-[500px] text-sm text-gray-500'>
              I am a UI designer and developer based out of Pune, interested in UI design and development. Contact me to design and develop any website you want.
            </p>
            <p className='max-w-[500px] text-sm text-gray-500'>
              I am a UI designer and developer based out of Pune, interested in UI design and development. Contact me to design and develop any website you want.
            </p>
            <p className='max-w-[500px] text-sm text-gray-500'>
              I am a UI designer and developer based out of Pune, interested in UI design and development. Contact me to design and develop any website you want.
            </p>
          </div>
          <div className='flex gap-3'>
            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
            <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
            <BiLogoBehance className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
            <BiLogoMedium className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
          </div>
        </div>

        {/* Right Image */}
        <div className='flex items-center justify-center md:justify-end'>
          <img
            src={image}
            alt=""
            className='w-[250px] sm:w-[250px] md:w-[300px] lg:w-[400px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
