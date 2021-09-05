import "bootstrap/dist/js/bootstrap.min.js";
import '@fortawesome/fontawesome-free/js/all.js';


class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#queryMovie").value;
    }

    render() {
        this.innerHTML = `
      
            <div class="input-group mb-4 border rounded-pill p-2 bg-light" style="margin-top:20px">
                <input aria-describedby="button-addon3" class="form-control bg-light border-0" type="search" placeholder="What movie are you searching for?" id="queryMovie">
                <div class="input-group-append">
                    <button type="submit" id="buttonSearch" class="btn btn-link text-secondary"><i class="fa fa-search"></i></button>
                </div>
            </div>

               
        `;

        this.querySelector("#buttonSearch").addEventListener("click", this._clickEvent);
    }

}

customElements.define('search-bar', SearchBar)