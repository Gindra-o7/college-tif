import React, { useState } from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaLaravel, FaReact, FaVuejs, FaNodeJs, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import CourseNav from "../components/CourseNav";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { icon: FaLaravel, color: "red", title: "Laravel" },
    { icon: FaReact, color: "red", title: "ReactJs" },
    { icon: FaVuejs, color: "red", title: "VueJs" },
    { icon: FaNodeJs, color: "red", title: "NodeJs" },
    { icon: SiFlutter, color: "red", title: "Flutter" },
  ];

  const handleScroll = (direction) => {
    if (direction === 'up') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Get the 3 items to show at the current position
  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <main className="flex items-center justify-center w-screen gap-4 p-24 mt-24">
      <div className="space-y-4 mr-16 relative" style={{ height: "380px" }}>
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-12 py-6 bg-ownWhite custom-border transition-all duration-300 ${
              index === 1 ? 'z-10 scale-105 shadow-lg' : 'opacity-50 blur-sm'
            }`}
          >
            <CourseNav icon={item.icon} color={item.color} title={item.title} />
          </div>
        ))}
        <button 
          onClick={() => handleScroll('up')} 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
        >
          <FaChevronUp className="w-6 h-32" />
        </button>
        <button 
          onClick={() => handleScroll('down')} 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
        >
          <FaChevronDown className="w-6 h-6" />
        </button>
      </div>
      <div className="w-[60%] px-12 py-8 bg-ownWhite custom-border-lg font-trap">
        <h2 className="text-2xl font-semibold text-secondary">
          Mari belajar dengan kami!
        </h2>
        <h1 className="text-4xl font-bold font-tech text-primary">
          Mari belajar bersama!
          <FaHandshakeAngle className="inline-block w-8 h-8 mb-2 ml-4 text-primary" />
        </h1>
        <p>
          Kami hadir buat bantuin kamu ngefahamin materi-materi di bidang IT dan
          Desain. Ayo daftar dan dapatin akses materi-materi tersebut selamanya!
        </p>
      </div>
    </main>
  );
};

export default Hero;