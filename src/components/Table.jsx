import React from "react";
import Referral from "./Referral";
const SideMenu = () => {
  return (
    <div className="w-full md:w-64 min-w-[250px] bg-white rounded-lg shadow-lg">
      <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-t-lg text-left">
        ALL PROGRAMS
      </button>
      <ul className="divide-y divide-gray-200">
        {[
          "Product Management",
          "Strategy & Leadership",
          "Business Management",
          "Fintech",
          "Senior Management",
          "Data Science",
          "Digital Transformation",
          "Business Analytics",
        ].map((item, index) => (
          <li
            key={index}
            className="py-3 px-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
          >
            {item} <span>›</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReferralBenefits = () => {
  const referralData = [
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program:
        "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      {/* Heading at the Top */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>

      {/* Sidebar & Table in Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <SideMenu />
        </div>

        {/* Referral Table */}
        <div className="w-full">
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-blue-200 text-gray-700">
                  <th className="py-3 px-4">Programs</th>
                  <th className="py-3 px-4">Referrer Bonus</th>
                  <th className="py-3 px-4">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {referralData.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-4">{item.program}</td>
                    <td className="py-3 px-4">{item.referrerBonus}</td>
                    <td className="py-3 px-4">{item.refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Refer Button Below Table */}
          <div className="mt-6 flex justify-center">
            <Referral/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;
