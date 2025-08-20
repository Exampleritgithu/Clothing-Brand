import React, { useState } from "react";

// Reusable ProductCard component
const ProductCard = ({ title, category, colorImages, colorPrices }) => {
  const [selectedColor, setSelectedColor] = useState(Object.keys(colorImages)[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="text-center ">
      {/* Product Image */}
      <img
        src={colorImages[selectedColor]}
        alt="Product"
        className="w-72 mx-auto"
      />

      {/* Category */}
      <p className="text-gray-500 mt-2">{category}</p>

      {/* Title */}
      <h2 className="text-lg font-serif">{title}</h2>

      {/* Price */}
      <p className="font-bold text-gray-500">
        ${colorPrices[selectedColor].toFixed(2)}
      </p>

      {/* Size Options */}
      <div className="flex justify-center gap-2 mt-3">
        {["XL", "L", "M", "S", "XS"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-3 py-1 border rounded hover:border-2 ${
              selectedSize === size ? "" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Color Options */}
      <div className="flex justify-center gap-3 mt-4">
        {Object.keys(colorImages).map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full border ${
              selectedColor === color ? "ring-2 ring-offset-2 ring-gray-600" : ""
            }`}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Main Component
const ProductList = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl mb-20 font-serif italic mt-36">Most Popular</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {/* Card 1 */}
        <ProductCard
          title="Timeless Classic Collection"
          category="Work & Office"
          colorImages={{
            white: "img-a-white.jpg",
            black: "img-a-black.jpg",
            green: "img-a-green.jpg",
            red: "img-a-red.jpg",
          }}
          colorPrices={{
            white: 124.9,
            black: 119.9,
            green: 129.9,
            red: 99.9,
          }}
        />

        {/* Card 2 */}
        <ProductCard
          title="Elegant Street Wear"
          category="Casual"
          colorImages={{
            
            black: "img-b-black.jpg",
            red: "img-b-red.jpg",
            green: "img-b-green.jpg",
          }}
          colorPrices={{
           
            black: 129.9,
            red: 149.9,
            green: 109.9,
          }}
        />

        {/* Card 3 */}
        <ProductCard
          title="Summer Vibes Collection"
          category="Summer Special"
          colorImages={{
            white: "img-c-white.jpg",
            red: "img-c-red.jpg",
            black: "img-c-black.jpg",
            green: "img-c-green.jpg",
          }}
          colorPrices={{
            white: 99.9,
            red: 109.9,
            black: 119.9,
            green: 89.9,
          }}
        />

        {/* Card 4 */}
        <ProductCard
          title="Luxury Night Wear"
          category="Party & Events"
          colorImages={{
            black: "img-d-black.jpg",
            white: "img-d-white.jpg",
            green: "img-d-green.jpg",
            red: "img-d-red.jpg",
          }}
          colorPrices={{
            black: 159.9,
            white: 179.9,
            green: 169.9,
            red: 149.9,
          }}
        />
      </div>
    </div>
  );
};

export default ProductList;
