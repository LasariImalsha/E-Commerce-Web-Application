import CategoryOneImage from "../assets/products/Category1.jpg";
import CategoryTwoImage from "../assets/products/Category2.jpg"
import CategoryThreeImage from "../assets/products/Category3.jpg"
import CategoryFourImage from "../assets/products/Category4.jpg"


import React from "react";

const categories = [
  {
    name: "Casual Wear",
    image: CategoryOneImage,
  },
  {
    name: "Foot Wear",
    image: CategoryTwoImage,
  },
  {
    name: "Sport Wear",
    image:CategoryThreeImage,
  },
  {
    name: "Accessories",
    image:CategoryFourImage,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Our Categories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
