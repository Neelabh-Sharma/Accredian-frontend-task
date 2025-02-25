import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../slice/dataSlice';

const Referral = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.data || {});
  
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referralCourse: "",
    referredName: "",
    referredEmail: "",
  });

  // Open & Close Modal
  const toggleModal = () => setIsOpen(!isOpen);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendData(formData));
    alert("Referral Submitted Successfully!");
    toggleModal();
  };

  return (
    <>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        onClick={toggleModal}
      >
        Refer Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-4 text-gray-600 text-2xl font-bold hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold text-center">Refer a Friend</h2>

            <form onSubmit={handleSubmit} className="mt-4">
              <label className="block text-gray-700 font-medium">
                Your Name:
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <label className="block text-gray-700 font-medium mt-3">
                Your Email:
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <label className="block text-gray-700 font-medium mt-3">
                Referral Course:
                <select
                  name="referralCourse"
                  value={formData.referralCourse}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                >
                  <option value="">Select a Course</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Business Analytics">Business Analytics</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </label>

              <label className="block text-gray-700 font-medium mt-3">
                Friend's Name:
                <input
                  type="text"
                  name="referredName"
                  value={formData.referredName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <label className="block text-gray-700 font-medium mt-3">
                Friend's Email:
                <input
                  type="email"
                  name="referredEmail"
                  value={formData.referredEmail}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition"
              >
                Submit Referral
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Referral;
