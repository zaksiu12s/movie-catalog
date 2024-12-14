import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

interface MovieDetails {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  adult: boolean;
  popularity: string;
}

const API_KEY = "d05362fe55eff29316b48cceed6b8e88";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (id !== "info") {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
          );
          const data: MovieDetails = await response.json();
          setMovie(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      };
      fetchMovieDetails();
    }
  }, [id]);

  if (id === "info") {
    return (
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center  p-6">
        <div className="max-w-4xl mx-auto text-center p-6 bg-gray-900 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-6">Movie Details</h1>
          <p className="text-lg text-gray-300 mb-4">
            On this page, you can view detailed information about a movie by
            clicking the "View Details" link for a specific movie. Each movie
            has a unique ID, and when you navigate to this page with that ID,
            the details will be fetched and displayed here.
          </p>

          <p className="text-lg text-gray-300 mb-4">
            Please click on a movie to see more details.
          </p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-white bg-gray-800 min-h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-white bg-gray-800 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">{movie.title}</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 text-left">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg mb-6 lg:mb-0"
          style={{ width: "300px", height: "450px" }}
        />
        <div className="max-w-xl space-y-4 text-xl">
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Original Title:</strong> {movie.original_title}
          </p>
          <p>
            <strong>Original Language:</strong> {movie.original_language}
          </p>
          <p>
            <strong>Popularity:</strong> {movie.popularity}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Adult Content:</strong> {movie.adult ? "Yes" : "No"}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
