import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
  return (
    <div className="MovieList">
      <div className="movie-group">
        <h1>Popular Movies</h1>
        <ul className="movies">
          {props.movies.map((movie, i) => {
            return (
              <li key={i} onClick={() => props.setSelectedMovie(i)}>
                {movie.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
