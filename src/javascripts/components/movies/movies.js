import moviesData from '../../data/moviesData';

import './movies.scss';
import util from '../../helpers/util';

let movies = [];
const domstringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id = "${movie.id}" class= "card movie"  style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${movie.name}</h5>`;
    domString += `<p class="card-text">${movie.description}</p>`;
    domString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    domString += `<div><em>${movie.genre}</em></div>`;
    domString += `<div>${movie.releaseDate}</div>`;
    domString += `<div>Locations: ${movie.locations.length}</div>`;
    domString += '</div>';
    domString += '</div>';
  });

  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
