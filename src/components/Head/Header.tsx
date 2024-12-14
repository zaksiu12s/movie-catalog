import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import SearchPage from "../pages/SearchPage";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center">
      <Router>
        <nav className="bg-gray-900 w-full px-6 py-6 shadow-md text-center">
          <ul className="flex justify-center space-x-8 text-lg md:text-xl font-semibold">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/moviedetails/info"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                Movie Details
              </Link>
            </li>
            <li>
              <Link
                to="/searchpage"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                Search Page
              </Link>
            </li>
          </ul>
        </nav>

        <main className="p-6 text-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
            <Route path="/searchpage" element={<SearchPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default Header;
