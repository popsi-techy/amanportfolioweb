import React from 'react';
import image from '../../public/image.jpg'; // replace with your image path

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-6xl font-light text-600'>Get in touch</h1>

      <div className='flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-7xl'>
        {/* Left side with contact note */}
        <div className='flex flex-col items-center md:items-start gap-6 text-center md:text-left'>
          <p className='text-lg md:text-xl text-gray-700'>
            Let's get in touch! Feel free to reach out to me via email or any of the social media platforms below. I'd love to collaborate with you on exciting projects!
          </p>

          <div className='space-y-2'>
            <p className='text-lg font-semibold text-teal-600'>Email:</p>
            <a href='mailto:amankumar.prof4@gmail.com' className='text-teal-500 hover:text-teal-600 transition duration-200'>
              amankumar.prof4@gmail.com
            </a>
          </div>

          <div className='space-y-2'>
            <p className='text-lg font-semibold text-teal-600'>Phone:</p>
            <p className='text-teal-500'>(+91) 8340587383</p>
          </div>
        </div>

        {/* Right side with image */}
        <div className='flex justify-center md:justify-end'>
          <img src={image} alt="Contact" className='w-[250px] sm:w-[300px] md:w-[400px] rounded-lg shadow-lg' />
        </div>
      </div>
    </div>
  );
}

export default Contact;
