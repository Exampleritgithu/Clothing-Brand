import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const menuItems = ["Home", "Shop", "About Us", "Contact Us"];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 font-bold  text-white z-50 ">
      {/* Center: Menu */}
      <ul className="hidden md:flex items-center gap-6 font-semibold">
        {menuItems.map((item) => (
          <li key={item} className="cursor-pointer  transition">
            {item}
          </li>
        ))}
      </ul>
      {/*Logo$*/}
      <img src="./logo.svg" alt="Logo" className="h-14 w-auto mr-48 " />
      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon / Input */}
        <div className="relative">
          {showSearch ? (
            <input
              type="text"
              placeholder="Search..."
              className="border-black text-black px-4 bg-white py-1 focus:outline-black focus:ring w-40 sm:w-56 transition"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 hover:cursor-pointer rounded-full transition"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Shopping Bag */}
        <button className="p-2 hover:cursor-pointer rounded-full transition">
          <FiShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
