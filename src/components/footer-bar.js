class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer bg-light" style="padding:10px">
            <div class="copyright-text">
                <p>© 2021
                    <a href="#">Netpliks </a>. All rights reserved. Created by
                    <a href="#">Diaz Amaliana</a>
                </p>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-bar', FooterBar);