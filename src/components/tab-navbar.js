class Navbar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand">
                <img src="https://raw.githubusercontent.com/diazamaliana/idcamp-bffwd-netpliks-app/master/src/assets/logo.svg" height="28" alt="netfliks-app">
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#" id="trending" class="nav-item nav-link active">Movies</a>
                    <a href="#" class="nav-item nav-link">TV Series</a>
                    <a href="#" class="nav-item nav-link">Animes</a>
                </div>
                <div class="navbar-nav ml-auto">
                    <a href="#" class="nav-item nav-link">Login</a>
                </div>
            </div>
        </nav>`;

    }

}

customElements.define('tab-navbar', Navbar)