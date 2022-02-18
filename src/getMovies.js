import axios from 'axios';

export function getMovies() {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=8b00462fd15033a058b9ae892f063a7b&language=en-US&page=1'
    )
    .then(function (response) {
      console.log(response.data.results);
      setMovies({ movies: response.data.results });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
