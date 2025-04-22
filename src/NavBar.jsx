import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              RecipeBook
            </a>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="/recipes" className="hover:underline">
              All Recipes
            </a>
            <a href="/favorites" className="hover:underline">
              Favorites
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
