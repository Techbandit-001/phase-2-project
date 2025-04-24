import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
        <header className="shadow-md">
        <nav className="bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex gap-4">
              <Link to={"/"}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Home
                </button>
              </Link>
              <Link to={"/Favorites"}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Favorites
                </button>
              </Link>

              <Link to={"/Contact"}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Contact Us
                </button>
              </Link>

              <Link to={"/About"}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  About
                </button>
                </Link>
                </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-2xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
