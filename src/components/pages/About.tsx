import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center  p-6">
      <div className="max-w-4xl mx-auto text-center p-6 bg-gray-900 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <p className="text-lg text-gray-300 mb-4">
          This is a practice project designed to help me learn and enhance my
          skills in React and Tailwind CSS. The website leverages The Movie
          Database (TMDB) API to provide access to a vast collection of movie
          data, including details about top-rated movies, new releases, and
          search functionality.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          It serves as a hands-on learning platform to explore building dynamic
          user interfaces, managing state, and fetching data from APIs. Thank
          you for visiting, and I hope you enjoy exploring the features.
        </p>
      </div>
    </div>
  );
};

export default About;
