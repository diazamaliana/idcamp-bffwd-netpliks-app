class MovieDetail extends HTMLElement {
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
            .movie-card {
                position: relative;
                display: block;
                width: 800px;
                height: auto;
                margin: 80px auto;
                overflow: hidden;
                border-radius: 10px;
                transition: all 0.4s;
                box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
              }
              .movie-card:hover {
                transform: scale(1.02);
                box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
                transition: all 0.4s;
              }
              .movie-card .info_section {
                position: relative;
                width: 100%;
                height: 100%;
                background-blend-mode: multiply;
                z-index: 2;
                border-radius: 10px;
              }
              .movie-card .info_section .movie-header {
                position: relative;
                padding: 25px;
                height: 40%;
              }
              .movie-card .info_section .movie-header h1 {
                color: black;
                font-weight: 400;
              }
              .movie-card .info_section .movie-header h4 {
                color: #555;
                font-weight: 400;
              }
              .movie-card .info_section .movie-header .minutes {
                display: inline-block;
                margin-top: 15px;
                color: #555;
                padding: 5px;
                border-radius: 5px;
                border: 1px solid rgba(0, 0, 0, 0.05);
              }
              .movie-card .info_section .movie-header .type {
                display: inline-block;
                color: #959595;
                margin-left: 10px;
              }
              .movie-card .info_section .movie-header .locandina {
                position: relative;
                float: left;
                margin-right: 20px;
                height: 120px;
                border-radius:5px;
                box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
              }
              .movie-card .info_section .movie-desc {
                padding: 25px;
                height: 50%;
              }
              .movie-card .info_section .movie-desc .text {
                color: #545454;
              }
              .movie-card .info_section .movie-social {
                height: 10%;
                padding-left: 15px;
                padding-bottom: 20px;
              }
              .movie-card .info_section .movie-social ul {
                list-style: none;
                padding: 0;
              }
              .movie-card .info_section .movie-social ul li {
                display: inline-block;
                color: rgba(0, 0, 0, 0.3);
                transition: color 0.3s;
                transition-delay: 0.15s;
                margin: 0 10px;
              }
              .movie-card .info_section .movie-social ul li:hover {
                transition: color 0.3s;
                color: rgba(0, 0, 0, 0.7);
              }
              .movie-card .info_section .movie-social ul li i {
                font-size: 19px;
                cursor: pointer;
              }
              .movie-card .blur_back {
                position: absolute;
                top: 0;
                z-index: 1;
                height: 100%;
                right: 0;
                background-size: cover;
                border-radius: 11px;
              }
              
              @media screen and (min-width: 768px) {
                .movie-header {
                  width: 65%;
                }
              
                .movie-desc {
                  width: 50%;
                }
              
                .info_section {
                  background: linear-gradient(to right, #f8f9fa 50%, transparent 100%);
                }
              
                .blur_back {
                  width: 95%;
                  background-position: -100% 10% !important;
                }
              }
              @media screen and (max-width: 768px) {
                .movie-card {
                  width: 95%;
                  margin: 70px auto;
                  min-height: 350px;
                  height: auto;
                }
              
                .blur_back {
                  width: 100%;
                  background-position: 50% 50% !important;
                }
              
                .movie-header {
                  width: 100%;
                  margin-top: 85px;
                }
              
                .movie-desc {
                  width: 100%;
                }
              
                .info_section {
                  background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
                  display: inline-grid;
                }
              }
             
            </style>
            <div class="modal fade" id="showDetail${this._movie.id}" tabindex="-1" role="dialog" aria-labelledby="movieTitle">
                <div class="modal-dialog modal-lg " role="document">
                    <div >
                        <div class="movie-card modal-content" id="bright">
                            <div class="info_section">
                                <button type="button" class="btn btn-outline-danger float-right" style="margin:10px;padding:10px" data-dismiss="modal"><span aria-hidden="true">Close</span></button>

                                <div class="movie-header">
                                    <img class="locandina" src="https://image.tmdb.org/t/p/w342${this._movie.poster_path}" alt="${this._movie.title}"/>
                                    <h3>${this._movie.title}</h3>
                                    <h6>Popularity: ${this._movie.popularity}</h6>
                                    <span class="badge badge-danger">${this._movie.original_language}</span><p class="type">${this._movie.release_date}</p>
                                </div>
                                <div class="movie-desc">
                                    <p class="text">
                                        ${this._movie.overview}
                                    </p>
                                </div>
                                <div class="movie-social">
                                    <ul>
                                        <li><i class="fa fa-share"></i></li>
                                        <li><i class="fa fa-heart"></i></li>
                                        <li><i class="fa fa-comment"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="blur_back" style="background-image: url('https://image.tmdb.org/t/p/original${this._movie.backdrop_path}')"></div>
                        </div>
                    </div>
                    
                </div>
            </div>`;
    }

}

customElements.define('movie-detail', MovieDetail);