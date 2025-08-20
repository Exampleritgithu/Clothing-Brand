import React from "react";

const Professions = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <h2 className="  ml-16 mt-16 uppercase text-sm font-bold">
          {" "}
          Work & Office Attire
        </h2>
        <h2 className="text-7xl  font-serif leading-20 ml-16 mt-6 italic">
          Professional Pinstripe Blazers Collection
        </h2>
        <p className=" w-[70%] ml-16 mt-6  text-gray-500 font-bold">
          Elevate your workwear with our Professional Pinstripe Blazers
          Collection, where tailored sophistication meets modern confidence for
          a powerfully polished office look.
        </p>
        <button className="py-4 px-6 ml-16 mt-16 border-2 text-black mr-36 hover:bg-black hover:text-white cursor-pointer ">
          VIEW COLLECTION
        </button>
      </div>
      <div className="relative w-full">
        <img
          src="profession.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Professions;
