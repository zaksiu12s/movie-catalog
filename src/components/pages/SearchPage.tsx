import React, { useState, useEffect } from "react";
import SearchBar from "../Head/SearchBar";
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

const SearchPage = () => {
  const [childData, setChildData] = useState<string>("");

  const handleDataFromChild = (data: string) => {
    setChildData(data);
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${childData}`
        );
        const data: ApiResponse = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [childData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SearchBar onDataSend={handleDataFromChild}></SearchBar>
      <section>
        {movies.length > 0 && (
          <h2 className="text-3xl font-semibold text-center mb-6 mt-6">
            Results:
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6 justify-items-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
