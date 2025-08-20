import React from "react";

const Newtshop = () => {
  return (
    <div
      className="relative h-[150vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('Newtshop.jpg')" }}
    >
      {/* Overlay (optional, for readability of text) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex md:flex-row   h-full px-16 gap-8">
        {/* Product Image */}
        <img
          src="img-c-black.jpg"
          alt="Fashion"
          className="w-1/3 h-auto -mt-36 absolute "
        />
      </div>
      {/* Text */}
       <h2 className="font-serif text-4xl md:text-5xl text-white max-w-md laeading-slug ">
          Discover the allure of fashion reinvented!
        </h2>
    </div>
  );
};

export default Newtshop;
