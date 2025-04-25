import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-orange-500 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold  ">
                  Recipe Book
                </Link>
              </div>
              {/* Navigation Links */}
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
                  className="hover:underline text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="hover:underline text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="p-4">
        <h1 className="text-2xl font-bold">Favorites</h1>
        <p>Here you can see your favorite recipes.</p>
      </div>
    </>
  );
}
