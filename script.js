function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /***********************
                                                                                                                                                                                                             Menu Component
                                                                                                                                                                                                            ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "WHO I AM?")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT FRED"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" }, "fredoly",

    React.createElement("strong", null, "Wagni")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "I build Web apps"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "&"), " create Web design as a"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "Fullstack Web developer"))),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "#projects" }, "Portfolio"),
    React.createElement("a", { href: "#contact", className: "cta" }, "Contact Fred")))));






};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Who I am?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "My name is Fredoly."),
    React.createElement("p", null, "I am a fullstack web developer and UX designer based in the wonderful west region of Cameroon, Bafoussam."),


    React.createElement("p", null, "I really enjoy solving problems as well as making things beautiful and easy to use for both businesses and individuals. I can't stop learning new things; the more, the better. I also like excursions, a hobby that I do every vacation. Oh, and roast fish; I have a passion for roast fish with potatoes!")),



    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "What can I do?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Frontend & Backend development."),
    React.createElement("p", null, "For the front-end, I generally work with Javascript, among others popular frameworks like React and Jquery. I also make the web look pretty using Sass, CSS and, whenever needed, their bootstrap companion."),


    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel).")),



    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Data Visualization."),
    React.createElement("p", null, "I feel comfortable working with D3 JS. Bar chart, Scatterplot graph, Treemap diagram are some kind of industry standards and I love working with them."),


    React.createElement("p", null, "Presenting the data with a touch of beauty is important to me. As I mentioned, creating pretty things is particularly important for me."))))));







};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "Some of my Projects"),
    React.createElement("p", { className: "separator" }),
    ),




    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: "Borrador Products Landing Page",
      img: 'https://user-images.githubusercontent.com/61193321/112748800-3753f100-8fb6-11eb-97d7-6a69c72268f7.png',
      tech: "js css node",
      link: "https://borrador-cosmetiques.herokuapp.com/",
      repo: "https://github.com/Walf-dev/borrador-cosmetiques" },

    React.createElement("small", null, "Built using Node, Express, Javascript, Jquery, Html, CSS + Bootstrap."),
    React.createElement("p", null, "A landing page for a cosmetic startup.")),


    React.createElement(Project, {
      title: "React ToDo App",
      img: 'https://user-images.githubusercontent.com/61193321/112749786-91f04b80-8fbc-11eb-8c85-ca043ae81da9.png',
      tech: "js react node css",
      link: "https://walf-dev-react-todo-app.herokuapp.com/",
      repo:"https://github.com/Walf-dev/react-todo-app"
     },

    React.createElement("small", null, "Built using Node, Express, React, CSS."),
    React.createElement("p", null, "This is a productivity app to manage your tasks.")),



    React.createElement(Project, {
      title: "Drum machine.",
      img: 'https://user-images.githubusercontent.com/61193321/90807842-feb0b280-e316-11ea-8a3a-a8cfeed6d7e4.jpg',
      tech: "js react css",
      link: "https://codepen.io/Wagni/full/eYpeNep" },

    React.createElement("small", null, "Built using React and Sass."),
    React.createElement("p", null, "A drum machine app which retrieves samples from an API.")),



    React.createElement(Project, {
      title: "American/British translator.",
      img: 'https://user-images.githubusercontent.com/61193321/90804074-9dd2ab80-e311-11ea-9b86-e82373ec6c43.jpg',
      tech: "js node css",
      link: "https://wagni-american-british-translator.glitch.me/",
      repo: "https://github.com/Walf-dev/American-British-English-Translator" },

    React.createElement("small", null, "Built using Node, Express,Javascript + jQuery, CSS + Bootstrap."),


    React.createElement("p", null, "This is a full-stack app that I made which lets the users translate american english to british english and vice versa.")),



    React.createElement(Project, {
      title: "Personal Library.",
      img: 'https://user-images.githubusercontent.com/61193321/90804754-8d6f0080-e312-11ea-845a-5d2b903afb8e.jpg',
      tech: "js node css",
      link: "https://walf-personal-library.glitch.me/",
      repo: "https://github.com/Walf-dev/Personal-Library" },

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and HTML."),
    React.createElement("p", null, "A full-stack website to store book titles and comments to each book into a remote database.")),



    React.createElement(Project, {
      title: "Issue Tracker.",
      img: 'https://user-images.githubusercontent.com/61193321/90805062-053d2b00-e313-11ea-813b-dbc0a2fd0b42.jpg',
      tech: "js node css",
      link: "https://wagni-issue-tracker-app.glitch.me/",
      repo: "https://github.com/Walf-dev/Issue-Tracker" },

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap."),
    React.createElement("p", null, "Yet another full-stack app to save and manage technical issues to be fixed.")),

    React.createElement(Project, {
      title: "URL Shortener Microservice.",
      img: 'https://user-images.githubusercontent.com/61193321/90805238-446b7c00-e313-11ea-967d-0b3e6e10d4c4.jpg',
      tech: "js node css",
      link: "https://wagni-url-shortener-api.glitch.me/",
      repo: "https://github.com/Walf-dev/URL-Shortener-Microservice" },

    React.createElement("small", null, "Built using Node, Express, CSS + Bootstrap and Html."),
    React.createElement("p", null, "A microservice which takes a raw URL and makes it a short link to make it easy to sent it through the Internet.")),



    React.createElement(Project, {
      title: "Metric Converter.",
      img: 'https://user-images.githubusercontent.com/61193321/90806458-f35c8780-e314-11ea-89f3-8e37b14e4074.jpg',
      tech: "js node css",
      link: "https://wagni-metric-imperial-converter.glitch.me/",
      repo: "https://github.com/Walf-dev/Metric-Imperial-Converter" },

    React.createElement("small", null, "Built using Node, Express, CSS + Bootstrap and Html."),
    React.createElement("p", null, "A Metric Converter wich converts 'gal, l, mi, km, lbs, kg'.")),



    React.createElement(Project, {
      title: "Bar Chart.",
      img: 'https://user-images.githubusercontent.com/61193321/90808485-fc9b2380-e317-11ea-8884-f47c9b25a8c5.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/Wagni/full/RwrQOpo" },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A bar chart representing the evolution of Cameroon GDP.")),



    React.createElement(Project, {
      title: "Treemap Diagram.",
      img: 'https://user-images.githubusercontent.com/61193321/90808705-5bf93380-e318-11ea-9c12-9d765a871c15.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/Wagni/full/KKVRrYa" },

    React.createElement("small", null, "Built using CSS, JS and D3.js ."),
    React.createElement("p", null, "A treemap diagram representing prices of video games.")),

    React.createElement(Project, {
      title: "Choropleth Map.",
      img: 'https://user-images.githubusercontent.com/61193321/90808549-19cff200-e318-11ea-82b2-620cac8abccb.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/Wagni/full/vYLjrKx" },

    React.createElement("small", null, "Built using CSS, JS and D3.js ."),
    React.createElement("p", null, "A choropleth map representing the educational attainment by county in the U.S.")),



    React.createElement(Project, {
      title: "Scatterplot Graph.",
      img: 'https://user-images.githubusercontent.com/61193321/90808632-3d933800-e318-11ea-9a33-429cbdada029.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/Wagni/full/YzwaxMZ" },

    React.createElement("small", null, "Built using CSS, JS and D3.js ."),
    React.createElement("p", null, "A Scatterplot Graph representing doping in professional bicycle racing.")),

    React.createElement(Project, {
      title: "Random Quote Machine.",
      img: 'https://user-images.githubusercontent.com/61193321/90807645-af6a8200-e316-11ea-9454-e68f8d2e5082.jpg',
      tech: "js react css",
      link: "https://codepen.io/Wagni/full/qBOmrVP" },

    React.createElement("small", null, "Built using React and CSS + Bootstrap."),
    React.createElement("p", null, "A random quoting app which retrieves quotes from an API.")),

    React.createElement(Project, {
      title: "Javascript Calculator.",
      img: 'https://user-images.githubusercontent.com/61193321/90808097-6830c100-e317-11ea-83aa-f2018e56cfe3.jpg',
      tech: "js react css",
      link: "https://codepen.io/Wagni/full/jOWGLpb" },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")),

    React.createElement(Project, {
      title: "Pomodoro clock.",
      img: 'https://user-images.githubusercontent.com/61193321/90808009-46cfd500-e317-11ea-9db4-5cffabdcbb57.jpg',
      tech: "js react css",
      link: "https://codepen.io/Wagni/full/mdVqqwr" },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A cute and animated Pomodoro clock to help the users improve their productivity.")),


    React.createElement(Project, {
      title: "Technical Documentation Page.",
      img: 'https://user-images.githubusercontent.com/61193321/90807545-8a760f00-e316-11ea-8344-ee17074ede6f.jpg',
      tech: "js css",
      link: "https://codepen.io/Wagni/full/QWbyjKL" },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A technical documentation page made for electrical generators."))))));






};



/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "Want to ",
    React.createElement("br", null), "contact Fred?"),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to",

    React.createElement("a", { href: "mailto:starkwagni@gmail.com" }, React.createElement("i", { className: "email" }, " starkwagni@gmail.com")))),


    React.createElement(SocialLinks, null)),

    React.createElement("form", { id: "contact-form", action: "mailto:starkwagni@gmail.com", method: "post" },
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }),
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }),
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }),
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
    React.createElement("h3", null, "THANKS FOR VISITING"),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Fredoly WAGNI."),
    React.createElement(SocialLinks, null))));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "mailto:starkwagni@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Send me an email" },

    ' ',
    React.createElement("i", { className: "fa fa-envelope" })),

    React.createElement("a", {
      href: "https://twitter.com/walfizer",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my Twitter profile" },

    ' ',
    React.createElement("i", { className: "fab fa-twitter" })),

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/walf-dev",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my GitHub Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    React.createElement("a", {
      href: "https://codepen.io/Wagni",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my Codepen Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(Projects, null),
      React.createElement(About, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
