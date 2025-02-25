import React from "react";

function NavigationBar() {
  return (
    <div className="bg-blue-200 text-gray-800 rounded-full flex justify-center items-center space-x-6 sm:space-x-10 px-6 sm:px-10 py-3 w-max mx-auto text-base sm:text-lg font-semibold mt-6 sm:mt-10 mb-0">
      <span className="text-blue-500">Refer</span>
      <span>Benefits</span>
      <span>FAQs</span>
      <span>Support</span>
    </div>
  );
}

export default NavigationBar;
