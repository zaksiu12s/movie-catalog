interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="max-w-xs bg-gray-900 text-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-sm mt-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="text-sm mt-1">
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <a
          href={`/movie-catalog/movie-details/${movie.id}`}
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
