import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

    render() {
        this.innerHTML = `
        <div class="poster">
            <a id="buttonDetail" data-toggle="modal" data-target="#showDetail${this._movie.id}" >
                <img class="img-fluid rounded-lg" src="https://image.tmdb.org/t/p/w342${this._movie.poster_path}" alt="Poster">
            </a>
            
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);