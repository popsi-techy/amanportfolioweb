import React from 'react'

const Projects = () => {
  return (
    <div id='project' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>


        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.behance.net/gallery/186499805/BuildTogether-A-D-I-web-aplication" target="_blank">
           <h1 className='text-3xl font-semibold'>BuildTogether</h1>
           <h3 className='text'>Figma, Forms, Excel, Canva</h3>
           <p className='text-sm text-gray-600'>A web application of diversity and inclusion metrics to ensure managers can stay accountable for reaching corporate Diversity and inclusion goals. </p>
           </a>
        </div> 

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.behance.net/gallery/187739473/Investment-banking-app-UX-research" target="_blank">
           <h1 className='text-3xl font-semibold'>Your Bank</h1>
           <h3 className='text'>Figma</h3>
           <p className='text-sm text-gray-600'>A stock investing mobile app where users can invest in the stocks of companies they would like to invest in.</p>
           </a>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.behance.net/gallery/205640747/Careers-Page-Design" target="_blank">
           <h1 className='text-3xl font-semibold'>Careers Page</h1>
           <h3 className='text'>Figma</h3>
           <p className='text-sm text-gray-600'>A careers page design with user-friendly navigation, featuring clear job listings, filter options and an intuitive application flow. The design emphasizes accessibility and a seamless candidate experience.</p>
           </a>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.figma.com/design/d7gpD2CzBsgAI2BdkS1gix/VoteTrueApp?node-id=0-1&t=dpOVcwGZ53cDIotV-1" target="_blank">
           <h1 className='text-3xl font-semibold'>Vote True</h1>
           <h3 className='text'>Figma</h3>
           <p className='text-sm text-gray-600'>A mobile app that allows users to vote online, secured by Blockchain technology.</p>
           </a>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.behance.net/gallery/205712225/About-Course-Page-UI-Design" target="_blank">
           <h1 className='text-3xl font-semibold'>Course Page UI</h1>
           <h3 className='text'>Figma</h3>
           <p className='text-sm text-gray-600'>This About course page UI design is a user-friendly interface, It features clean layout, intuitive navigation and engaging element for an enhanced user experience</p>
           </a>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
           <a href="https://www.behance.net/gallery/188277053/Banner-and-post-designs/modules/1064634897" target="_blank">
           <h1 className='text-3xl font-semibold'>Visual Designs</h1>
           <h3 className='text'>Figma, Canva, Illustrator</h3>
           <p className='text-sm text-gray-600'>Explore my Instagram posts, LinkedIn banner, and more here.</p>
           </a>
        </div>

         
      </div>
    </div>
  )
}

export default Projects