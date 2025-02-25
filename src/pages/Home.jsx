import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/Herosection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Table from "../components/Table";
import image from "../assets/img3.png";
import image2 from "../assets/img4.png";
import Referral from '../components/Referral';
function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-[100px] sm:pt-[120px] md:pt-[100px]">
        <NavigationBar />
        <HeroSection />

        {/* First Image Section */}
        <div className="bg-[#EEF5FF] flex flex-col justify-center items-center w-full min-h-[40vh] px-4 py-6 sm:py-8 md:py-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
            How Do I <span className="text-blue-600">Refer?</span>
          </h4>
          <img
            src={image}
            alt="Illustration"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-contain mt-2"
          />
        
            <Referral/>
        </div>

        {/* Referral Table */}
        <div className="px-4 sm:px-8 md:px-12">
          <Table />
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-8 md:px-12">
          <FAQ />
        </div>

        {/* Second Image Section */}
        <div className=" flex flex-col justify-center items-center w-full min-h-[40vh] px-4 py-6 sm:py-8 md:py-10">
          <img
            src={image2}
             alt="Illustration"
            className="w-full h-auto object-contain mt-2"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
