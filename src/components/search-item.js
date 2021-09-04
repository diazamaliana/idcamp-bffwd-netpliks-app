import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./movie-overview";

class SearchMovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .card{
        font-size: 1em;
        overflow: hidden;
        padding: 1rem;
        border: none;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        margin:20px 0;
      }

      .card-block {
        font-size: 1em;
        position: relative;
        margin: 0;
        padding: 1em;
        border: none;
        box-shadow: none;       
      }
     
      .card-title{
        font-weight: bold;
      }

      .overflow-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }   
    </style>

    <div class="card bg-light rounded-lg">
      <div class="row ">
        <div class="col-lg-4">
          <img class="d-block w-100 h-auto rounded-lg" src="https://image.tmdb.org/t/p/w342${this._movie.poster_path}" alt="${this._movie.title}">
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="card-block">
            <h4 class="card-title">${this._movie.title}</h4>
            <p>${this._movie.release_date}</p>
            <h6 style="font-weight:bold"><span class="badge badge-warning">TMDb</span> ${this._movie.vote_average}/ ${this._movie.vote_count} <span><i class="fas fa-poll"></i></span></h6>
            <p class="overflow-ellipsis" >${this._movie.overview}</p>
            <button id="buttonDetail" data-toggle="modal" data-target="#showDetail${this._movie.id}" class="btn btn-danger btn-sm float-left rounded" >Read More</button>
          </div>
        </div>

      </div>
    </div>
   
    `;
  }
}

customElements.define("search-item", SearchMovieItem);