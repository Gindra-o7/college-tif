import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const CourseNav = ({ icon: Icon, title, color }) => {
  const colorList = {
    red: "red-600",
    blue: "blue-600",
    green: "green-600",
    yellow: "yellow-600",
    // tambahkan warna lain jika diperlukan
  };

  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <Icon className={`w-12 h-12 text-${colorList[color]}`} />
        <h1 className={`text-4xl font-bold text-${colorList[color]} font-tech`}>
          {title}
        </h1>
      </div>
      <button
        className={`flex items-center justify-center w-12 h-12 rounded-full custom-border bg-${colorList[color]}`}
      >
        <FaRegPlayCircle className="w-6 h-6 text-ownBlack" />
      </button>
    </>
  );
};

export default CourseNav;
