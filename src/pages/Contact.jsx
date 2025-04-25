import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-orange-500 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold">
                  Recipe Book
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/"
                  className="hover:underline text-white px-4 py-2 rounded  hover:bg-orange-700  transition"
                >
                  Home
                </Link>
                <Link
                  to="/favorites"
                  className="hover:underline text-white px-4 py-2 rounded  hover:bg-orange-700  transition"
                >
                  Favorites
                </Link>
                <Link
                  to="/contact"
                  className="hover:underline text-white px-4 py-2 rounded  hover:bg-orange-700  transition"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="hover:underline text-white px-4 py-2 rounded  hover:bg-orange-700  transition"
                >
                  About
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

        {/* Contact Info */}
        <div className="mb-6 text-center space-y-4 text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-500" /> group7@recipebook.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-green-500" /> +254 71234567
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-800">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6 text-xl">
              <a
                href="https://www.facebook.com/groups/448377041919906/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 hover:scale-110 transition" />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Ffoodrecipe_idea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 hover:scale-110 transition" />
              </a>
              <a
                href="https://www.instagram.com/easyfamilyrecipes/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Message Us
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
            className="w-full bg-orange-600 text-white py-3 rounded  hover:bg-orange-700  transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
