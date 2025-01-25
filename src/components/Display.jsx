import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Display = ({ movieList }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const hadnleOnFIlter = (mood) => {
    if (mood === "all") {
      setDisplayList(movieList);
    }

    const filteredMovie = movieList.filter((item) => item.mood === mood);
    setDisplayList(filteredMovie);
  };
  return (
    <div className="container mt-3">
      <div className="bg-dark p-3">
        <div className="row text-white">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => hadnleOnFIlter("all")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => hadnleOnFIlter("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-danger"
              onClick={() => hadnleOnFIlter("action")}
            >
              Action
            </button>
          </div>
        </div>
        <div className="mt-3 text-white">
          {" "}
          {displayList.length} movies listed
        </div>
        {displayList.map((item, i) => (
          <div className="row mt-3" key={i}>
            <MovieCard movieList={movieList} movieObj={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
