import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gray-100">

      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
        <img
          src="https://avatarfiles.alphacoders.com/364/thumb-350-364538.webp"
          alt="Profile"
          className="w-32 h-32 rounded-lg object-cover mb-4"
        />
        <h2 className="text-xl font-bold text-gray-900">Zohir ketto</h2>
        <p className="text-gray-600 mb-4">Full stack developper</p>
        <button className="bg-black text-white px-6 py-2 rounded-md font-semibold mb-4 hover:bg-gray-800">
          Email me
        </button>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-800 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-800 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-800 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/zohir-ketto-40b403333/" className="text-gray-800 text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 mt-6 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-center">
        I am a dedicated full stack developer currently studying at OFPPT. With a strong passion
for both front-end and backend technologies, I am eager to apply my skills in building
dynamic, user-friendly web applications.I hope to become a great developer

        </p>
        <div className="flex space-x-4 mt-6">

        </div>
      </div>
    </div>
  );
};

export default About;
