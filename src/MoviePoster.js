import React from 'react';

const MoviePoster = (props) => {
  return (
    <div className="movieposter">
      <h1>Poster: </h1>
      <div>
        {' '}
        <img
          className="poster"
          alt="Poster"
          src={`https://image.tmdb.org/t/p/original/${props.movies}`}
        ></img>{' '}
      </div>
    </div>
  );
};

export default MoviePoster;
