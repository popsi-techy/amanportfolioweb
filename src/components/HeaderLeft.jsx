import React, { useState, useEffect } from 'react';
import { BiBriefcase, BiCode, BiHome, BiMailSend } from 'react-icons/bi';

const HeaderLeft = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 top-5 z-10 w-[90%] max-w-4xl -translate-x-1/2 rounded-full shadow-lg transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md"
          : "bg-teal-600 text-white"
      }`}
    >
      <div className="flex justify-evenly p-3 md:gap-10">
        <a
          href="#home"
          className="flex flex-col items-center justify-center hover:text-teal-300 md:flex-row md:gap-2 md:px-4"
        >
          <BiHome className="text-2xl md:text-xl" />
          <span className="hidden md:block text-xs md:text-base">Home</span>
        </a>
        <a
          href="#experience"
          className="flex flex-col items-center justify-center hover:text-teal-300 md:flex-row md:gap-2 md:px-4"
        >
          <BiBriefcase className="text-2xl md:text-xl" />
          <span className="hidden md:block text-xs md:text-base">Experience</span>
        </a>
        <a
          href="#project"
          className="flex flex-col items-center justify-center hover:text-teal-300 md:flex-row md:gap-2 md:px-4"
        >
          <BiCode className="text-2xl md:text-xl" />
          <span className="hidden md:block text-xs md:text-base">Projects</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center hover:text-teal-300 md:flex-row md:gap-2 md:px-4"
        >
          <BiMailSend className="text-2xl md:text-xl" />
          <span className="hidden md:block text-xs md:text-base">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
