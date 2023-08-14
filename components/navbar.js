class Navbar extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        <script src="js/layout.js"></script>
        <link rel="stylesheet" href="css/layout.css">
        <div class="basis-full sticky top-0 z-40 w-full bg-beige">
            <div class="navigation-inner flex justify-evenly mx-auto">
                <div class="navigation-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#contacts" class="nav-link">Contacts</a>
                    <a href="files/JeminaSy_Resume_0723.pdf" target="_blank" class="nav-link btn">Resume</a>
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('app-navbar', Navbar);
  