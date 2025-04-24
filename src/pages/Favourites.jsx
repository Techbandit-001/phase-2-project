import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex gap-4">
                <Link to={"/"}>
                  <button className="px-4 py-2 rounded hover:bg-blue-700 transition">
                    Home
                  </button>
                </Link>
                <Link to={"/Favorites"}>
                  <button className="px-4 py-2 rounded hover:bg-blue-700 transition">
                    Favorites
                  </button>
                </Link>
                <Link to={"/Contact"}>
                  <button className="px-4 py-2 rounded hover:bg-blue-700 transition">
                    Contact Us
                  </button>
                </Link>
                <Link to={"/About"}>
                  <button className="px-4 py-2 rounded hover:bg-blue-700 transition ">
                    About
                  </button>
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
