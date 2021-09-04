import '../components/search-list.js';
import DataSource from '../data/data-source.js';

const search = () => {
    const searchElement = document.querySelector("search-bar");
    const searchListElement = document.querySelector("search-list");

    const getMovieTrending = (path) => {
        DataSource.renderMovies(path)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const eventSearch = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        loading.innerHTML = "";
        searchListElement.style.display = "block";
        searchListElement.movies = results;
    };

    const fallbackResult = message => {
        searchListElement.renderError(message);
    };

    searchElement.clickEvent = eventSearch;

    // Init view
    getMovieTrending('trending/movie/day');
   
};

export default search;