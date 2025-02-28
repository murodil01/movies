import React from "react";
import useApi from "../hooks/useApi";

const MovieList = () => {
  const {
    data: movies,
    loading,
    error,
  } = useApi("http://localhost:3000/movies");

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Movie List</h2>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="p-3 bg-gray-100 rounded-md shadow-md">
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
