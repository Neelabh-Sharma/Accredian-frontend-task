import React from "react";
import heroImage from "../assets/img1.png";
import Referral from "./Referral";

function HeroSection() {
  return (
    <div className="w-full h-auto flex items-center justify-center px-4 sm:px-6 py-8">
      {/* Main Container with Background Image */}
      <div
        className="bg-[#EEF5FF] w-full sm:w-[80%] h-auto sm:h-[60vh] rounded-2xl shadow-lg flex flex-col sm:flex-row items-center p-6 bg-cover bg-center relative"
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-opacity-70 rounded-2xl"></div>

        {/* Content inside */}
        <div className="relative z-10 flex flex-col sm:flex-row w-full items-center">
          {/* Left Side - Text Content */}
          <div className="w-full sm:w-1/2 p-4 sm:p-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight">
              Let's Learn <br />& Earn
            </h1>
            <p className="text-xl sm:text-3xl mt-2">
              Get a chance to win <br />
              up to{" "}
              <span className="text-blue-500 font-bold">Rs. 15,000</span>
            </p>
            <div className="mt-4 flex justify-center sm:justify-start">
              <Referral />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
            <img
              src={heroImage}
              alt="Hero"
              className="max-w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
