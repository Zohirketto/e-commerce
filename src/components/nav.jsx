import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const {quantity} =useSelector((state)=>state.commerce)
  return (
    <>

      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
  
            <h1 className="text-2xl font-bold text-gray-800">AntyStore</h1>

            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
            </div>

            <div className="flex items-center">
           
              <button className="relative">
              <Link to="/cart">  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
               
             
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                {quantity}
                </span>
                </Link>
              </button>
              
            </div>
          </div>
        </div>
      </nav>

      
     
    </>
  );
};

export default Navbar;