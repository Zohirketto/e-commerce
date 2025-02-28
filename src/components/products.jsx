import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addcart } from "../redux/Slice";
import heroImage from "../assets/imgs/1.jpg";

export default function Products() {
  const { data } = useSelector((state) => state.commerce);
  const dispatch = useDispatch();

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-700">No products available</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
          <section className="mt-16 w-full">
              <img
                src={heroImage} 
                alt="Hero Banner"
                className="w-full h-auto object-cover"
              />
            </section>
        <h1 className="text-3xl font-bold text-gray-800 my-8">Shop now</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((elm) => (
          <div
            key={elm.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center justify-between h-[250px]"
          >
            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
              <img src={elm.image} alt={elm.title} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-sm font-medium text-gray-800 mt-2 text-center line-clamp-1">
              {elm.title}
            </h3>
            <p className="text-lg font-semibold text-gray-900">${elm.price}</p>
            <div className="flex items-center justify-between w-full mt-auto space-x-2">
              <Link
                to={`/Productdetails/${elm.id}`}
                className="flex-1 text-center bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-300"
              >
                Details
              </Link>
              <button
                onClick={() => dispatch(addcart({ id: elm.id }))}
                className="flex-1 text-center bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
