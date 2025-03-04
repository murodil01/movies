/*import React, { useState } from "react";
import useApi from "../hooks/useApi";

const MovieList = () => {
  const { data: movies, loading, error, createData, updateData, deleteData } = useApi("http://localhost:3000/movies");
  
  const [newMovie, setNewMovie] = useState("");

  const handleAddMovie = () => {
    if (newMovie.trim() !== "") {
      createData({ title: newMovie });
      setNewMovie("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Movie List</h2>
      
      {error && <p className="text-red-500">{error}</p>}
      
      {loading && <p className="text-blue-500">Loading...</p>}
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Enter movie title"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded-md" onClick={handleAddMovie}>
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="p-3 bg-gray-100 rounded-md shadow-md flex justify-between items-center">
            <span>{movie.title}</span>
            <div className="space-x-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                onClick={() => updateData(movie.id, { title: movie.title + " (Updated)" })}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => deleteData(movie.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;*/
