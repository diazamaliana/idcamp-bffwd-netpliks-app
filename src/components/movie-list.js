import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        <h2 class="placeholder" style="color:white">Search ${message}</h2>
        `;
    }
    
    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;

            const detailElement = document.createElement("movie-detail");
            detailElement.movie = movie;
            this.append(detailElement);

            if (movie.poster_path && movie.vote_average) {
                this.appendChild(movieItemElement);
            }  
        });
    }
}

customElements.define('movie-list', MovieList)