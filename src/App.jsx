/*import React from "react";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Movies App</h1>
      <MovieList />
    </div>
  );
};

export default App;*/
import React from "react";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <PostList />
    </div>
  );
}

export default App;
