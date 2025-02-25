import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Programs Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          {[
            "Data Science & AI",
            "Product Management",
            "Business Analytics",
            "Digital Transformation",
            "Business Management",
            "Project Management",
            "Strategy & Leadership",
            "Senior Management",
            "Fintech",
          ].map((program, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span>{program}</span>
              <span className="text-xl font-bold">+</span>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email (Data Science Queries): admissions@accredian.com</p>
          <p>Email (Product Management Queries): pm@accredian.com</p>
          <p>Data Science Helpline: +91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Helpline: +91 9625811095</p>
          <p>Student Helpline: +91 7969322507</p>
          <p>Office: 4th Floor, 250, Phase IV, Udyog Vihar, Gurugram, Haryana 122015</p>

          <h3 className="mt-6 text-lg font-semibold">Why Accredian</h3>
          <h4 className="mt-2">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Accredian Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Accredian</h3>
          {[
            "About",
            "Career",
            "Blog",
            "Admission Policy",
            "Referral Policy",
            "Privacy Policy",
            "Terms of Service",
            "Master FAQs",
          ].map((link, index) => (
            <p key={index} className="py-1">{link}</p>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-6">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
