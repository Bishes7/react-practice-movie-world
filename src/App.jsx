import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToList = (movie) => {
    setMovieList([...movieList, movie]);
  };
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <Hero addToList={addToList} />
      {/* Display Section */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
