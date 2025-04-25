import { Link } from "react-router-dom";

function AboutUs() {
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

      <section className="p-8 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-orange-600">
          About Us
        </h1>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Welcome to <strong className="text-orange-600">Recipe Delight</strong>
          ! We’re passionate about sharing simple, delicious, and diverse
          recipes that bring people together.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're a beginner or a seasoned chef, we aim to make cooking
          joyful and rewarding. Thanks for being part of our food-loving
          community. Let’s make every meal memorable!
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Our mission is to make cooking enjoyable and approachable for
          everyone, from curious beginners to seasoned home chefs. We believe
          that every dish tells a story, and every kitchen holds the power to
          bring people together. That’s why we share not only easy-to-follow
          recipes, but also the heart behind them — the memories, the
          traditions, and the flavors that make each meal special.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Whether you're searching for a quick weeknight dinner, a cozy dessert
          to warm your soul, or an exciting dish to impress your guests, we’re
          here to help you cook with confidence and creativity. Thank you for
          being a part of our Recipe Delight family — let’s make something
          delicious, together.
        </p>
      </section>
    </>
  );
}

export default AboutUs;
