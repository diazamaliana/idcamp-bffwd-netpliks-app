import '../components/movie-list.js';
//import requests from '../data/api-config';
import DataSource from '../data/data-source.js';

const main = () => {
    const discoverElement = document.querySelector(".discover-movie movie-list");
    const upCompingElement = document.querySelector(".upcoming-movie movie-list");
    const nowPlayingElement = document.querySelector(".now-playing movie-list");
    const actionGenreElement = document.querySelector(".action-movie movie-list");
    const comedyGenreElement = document.querySelector(".comedy-movie movie-list");
    const horrorGenreElement = document.querySelector(".horror-movie movie-list");
    const romanceGenreElement = document.querySelector(".romance-movie movie-list");


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

    // Action Movies
    const getMovieAction = (genre_id) => {
        DataSource.genreMovies(genre_id)
            .then(renderAction)
            .catch(fallbackAction)
    };
    
    const renderAction = (results) => {
        loading.innerHTML = "";
        actionGenreElement.movies = results;
    };
    
    const fallbackAction = message => {
        actionGenreElement.renderError(message);
    };

    // Comedy Movies
    const getMovieComedy = (genre_id) => {
        DataSource.genreMovies(genre_id)
            .then(renderComedy)
            .catch(fallbackComedy)
    };
    
    const renderComedy = (results) => {
        loading.innerHTML = "";
        comedyGenreElement.movies = results;
    };
    
    const fallbackComedy = message => {
        comedyGenreElement.renderError(message);
    };

     // Horror Movies
     const getMovieHorror = (genre_id) => {
        DataSource.genreMovies(genre_id)
            .then(renderHorror)
            .catch(fallbackHorror)
    };
    
    const renderHorror = (results) => {
        loading.innerHTML = "";
        horrorGenreElement.movies = results;
    };
    
    const fallbackHorror = message => {
        horrorGenreElement.renderError(message);
    };

    // Horror Movies
    const getMovieRomance = (genre_id) => {
        DataSource.genreMovies(genre_id)
            .then(renderRomance)
            .catch(fallbackRomance)
    };
    
    const renderRomance = (results) => {
        loading.innerHTML = "";
        romanceGenreElement.movies = results;
    };
    
    const fallbackRomance = message => {
        romanceGenreElement.renderError(message);
    };

    // Show movies
    getMovies('discover/movie');
    getMovieNowPlaying('movie/now_playing');
    getMovieUpcoming('movie/upcoming');

    //Show genres
    getMovieAction('28');
    getMovieComedy('35');
    getMovieHorror('27');
    getMovieRomance('10749');
 };
   

export default main;