import React, { useState } from "react";
import { assets } from "../assets/assets"; // ✅ assuming your logo is here

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "course") {
      if (value === "Piano") setPrice(100000);
      else if (value === "Sax") setPrice(200000);
      else if (value === "Flute") setPrice(50000);
      else setPrice(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted! We’ll contact you soon.");
  };

  const handlePayment = () => {
    alert(`Redirecting to Paystack for ₦${price} payment...`);
    // 💳 later: integrate Paystack payment here
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4 py-20">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* 🎵 Logo Space */}
        <div className="flex justify-center mb-6">
          {/* ✅ if your logo is available in assets */}
          <img
            src={assets.logo_hub}
            alt="Saxophone Hub Logo"
            className="w-38 h-38"
          />
        </div>

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Register for a Course
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-800 text-white focus:outline-none border border-gray-700"
          >
            <option value="">Select a Course</option>
            <option value="Piano">Piano – ₦100,000</option>
            <option value="Sax">Saxophone – ₦200,000</option>
            <option value="Flute">Flute – ₦50,000</option>
          </select>

          {price > 0 && (
            <p className="text-center text-orange-400 font-semibold">
              Total: ₦{price.toLocaleString()}
            </p>
          )}

          <button
            type="submit"
            className="bg-orange-600 text-black py-2 rounded font-semibold hover:bg-orange-500 transition-all"
          >
            Register
          </button>

          <button
            type="button"
            onClick={handlePayment}
            disabled={price === 0}
            className={`${
              price === 0
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            } py-2 rounded font-semibold transition-all`}
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
