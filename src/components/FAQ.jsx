import React, { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState("Eligibility");

  const tabs = [
    { id: "Eligibility", label: "Eligibility" },
    { id: "HowToUse", label: "How To Use?" },
    { id: "Terms", label: "Terms & Conditions" },
  ];

  return (
    <div className="w-full flex flex-col items-center p-6">
      {/* FAQ Heading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      {/* Two Column Layout */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center space-x-6">
        {/* Left Column - Buttons */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelected(tab.id)}
              className={`px-6 py-3 text-lg font-medium rounded-lg border border-gray-300 transition-all duration-300 w-full text-left ${
                selected === tab.id
                  ? "bg-white shadow-lg text-black"
                  : "bg-transparent text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          {selected === "Eligibility" && (
            <p className="text-blue-600 font-semibold">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </p>
          )}
          {selected === "HowToUse" && (
            <p className="text-blue-600 font-semibold">How does the process work?</p>
          )}
          {selected === "Terms" && (
            <p className="text-blue-600 font-semibold">What are the terms & conditions?</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
