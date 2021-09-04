import '../components/movie-list.js';
//import requests from '../data/api-config';
import DataSource from '../data/data-source.js';

const main = () => {
    const discoverElement = document.querySelector(".discover-movie movie-list");
    const upCompingElement = document.querySelector(".upcoming-movie movie-list");
    const nowPlayingElement = document.querySelector(".now-playing movie-list");

    // Get discover movies
    const getMovies = (path) => {
        DataSource.renderMovies(path)
            .then(renderDiscover)
            .catch(fallbackDiscover)
    };
    
    const renderDiscover = (results) => {
        loading.innerHTML = "";
        discoverElement.movies = results;
    };
    
    const fallbackDiscover = message => {
        discoverElement.renderError(message);
    };

    /// Now Playing movies
    const getMovieNowPlaying = (path) => {
        DataSource.renderMovies(path)
            .then(renderNowPlaying)
            .catch(fallbackNowPlaying)
    };
    
    const renderNowPlaying = (results) => {
        loading.innerHTML = "";
        upCompingElement.movies = results;
    };
    
    const fallbackNowPlaying = message => {
        upCompingElement.renderError(message);
    };

    /// Upcoming Movies
    const getMovieUpcoming = (path) => {
        DataSource.renderMovies(path)
            .then(renderUpcoming)
            .catch(fallbackUpcoming)
    };
    
    const renderUpcoming = (results) => {
        loading.innerHTML = "";
        nowPlayingElement.movies = results;
    };
    
    const fallbackUpcoming = message => {
        nowPlayingElement.renderError(message);
    };

    // Show movies
    getMovies('discover/movie');
    getMovieNowPlaying('movie/now_playing');
    getMovieUpcoming('movie/upcoming');
 };
   

export default main;