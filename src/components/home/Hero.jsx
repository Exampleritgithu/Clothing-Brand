import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="Hero-bg.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Content inside Hero */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
        {/* Small Subtitle */}
        <h2 className="text-white text-xs font-bold md:text-sm  mb-4 mt-48 uppercase text-center">
  Casual & Everyday
</h2>


        {/* Main Heading with line break */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic mt-10 leading-[120%]">
  Effortlessly Blend Comfort <br />
  & Style!
</h1>

        <p p className="w-[60%] text-white font-bold mt-8">Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</p>
        <button className=" p-4 text-white border-2 mt-6 hover:bg-white hover:text-black">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
};

export default Hero;
