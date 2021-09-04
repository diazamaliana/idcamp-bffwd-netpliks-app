class HeroMovie extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section style="margin:2rem">
            <div id="carouselControls" class="carousel slide " data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 rounded-lg" src="https://image.tmdb.org/t/p/original/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg" alt="First slide">
                        <div class="carousel-caption d-none d-md-block rounded-lg" style="background-color: rgba(0,0,0,0.5);">
                            <h2> Jumanji: The Next Level (2019) </h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 rounded-lg" src="https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block rounded-lg" style="background-color: rgba(0,0,0,0.5);">
                            <h2>Joker (2019)</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 rounded-lg" src="https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block rounded-lg" style="background-color: rgba(0,0,0,0.5);">
                            <h2>Black Widow (2021)</h2>
                        </div>
                    </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>                                         
        </section>
        `;
    }
}

customElements.define('hero-movie', HeroMovie);