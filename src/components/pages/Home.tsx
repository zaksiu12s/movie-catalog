import React, { useState, useEffect } from "react";
import MovieCard from "../Head/MovieCard";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

interface ApiResponse {
  results: Movie[];
}

const API_KEY = "d05362fe55eff29316b48cceed6b8e88";
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [newReleases, setNewReleases] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const topRatedResponse = await fetch(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`
        );
        const topRatedData: ApiResponse = await topRatedResponse.json();

        const newReleasesResponse = await fetch(
          `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`
        );
        const newReleasesData: ApiResponse = await newReleasesResponse.json();

        setTopRatedMovies(topRatedData.results.slice(0, 10));
        setNewReleases(newReleasesData.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-white bg-gray-800 min-h-screen px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Welcome to the Page!
      </h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          New Releases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6 justify-items-center">
          {newReleases.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6 justify-items-center">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
