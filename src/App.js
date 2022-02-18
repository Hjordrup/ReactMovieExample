import React, { useState, useEffect } from 'react';
import MovieImg from './assets/Image/movie_img.png';
import MOCK_MOVIES from './Shared/MockMovies';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';
import MoviePlot from './MoviePlot';
import './App.css';
import axios from 'axios';
const App = () => {
  const [movies, setMovies] = useState({ movies: MOCK_MOVIES });
  const [selectedMovies, setSelectedMovies] = useState(0);

  function setSelectedMovie(id) {
    setSelectedMovies(id);
  }

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=APIb&language=en-US&page=1'
      )
      .then(function (response) {
        console.log(response.data.results);
        setMovies({ movies: response.data.results });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="jumbotron">
        <h1>
          React Movies <img alt="Movie" src={MovieImg}></img>{' '}
        </h1>
        This small App demonstrates communication between child-components using
        Input/Output
      </div>
      <div style={{ display: 'flex' }} className="mainBody">
        <MovieList movies={movies.movies} setSelectedMovie={setSelectedMovie} />
        <MoviePoster movies={movies.movies[selectedMovies].poster_path} />
      </div>
      <div className="plot">
        <MoviePlot plot={movies.movies[selectedMovies].overview} />
      </div>
    </div>
  );
};

export default App;
