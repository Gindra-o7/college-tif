import React from "react";

import { FaLaravel } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import CourseNav from "../components/CourseNav";

const Hero = () => {
  return (
    <main className="flex items-center justify-center w-screen gap-4 p-24 mt-24">
      <div className="flex items-center justify-between w-[40%] px-12 py-6 bg-ownWhite custom-border">
        <CourseNav icon={FaLaravel} color="red" title="Laravel" />
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
