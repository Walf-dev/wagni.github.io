import React, { useState } from 'react';
import './App.css';


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              WHO I AM?
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT FRED
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            fredoly
            <strong>Wagni</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I build Web apps</span><br/>
          <span className="line">
            <span className="color">&</span> create Web design as a
          </span><br/>
           <span className="line">
            <span className="color">Fullstack Web developer</span>
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">Portfolio</a>
          <a href="#contact" className="cta">
            Contact Fred
          </a>
        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who I am?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Fredoly.</h4>
            <p>
              I am a fullstack web developer and UX designer based in the wonderful west region of Cameroon, Bafoussam.
            </p>
            <p>
              I really enjoy solving problems as well as making things beautiful and easy to use for both businesses and individuals. I can't stop learning new things; the more, the better. I also like excursions, a hobby that I do every vacation. Oh, and roast fish; I have a passion for roast fish with potatoes!
            </p>
          </div>
          <div className="title">
            <h3>What can I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Frontend & Backend development.</h4>
            <p>
              For the front-end, I generally work with Javascript, among others popular frameworks like React and Jquery. I also make the web look pretty using Sass, CSS and, whenever needed, their bootstrap companion.
            </p>
            <p>
             For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Data Visualization.</h4>
            <p>
              I feel comfortable working with D3 JS. Bar chart, Scatterplot graph, Treemap diagram are some kind of industry standards and I love working with them.
            </p>
            <p>
             Presenting the data with a touch of beauty is important to me. As I mentioned, creating pretty things is particularly important for me.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
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
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Some of my Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. All of these
            were built during my coding camp adventure on{' '}
            <a href="https://www.freecodecamp.org/wagni" target="_blank" rel="noopener noreferrer">
              freeCodeCamp
            </a>
            , where I've been coding for almost 7 months non-stop until I completed all the projects required to get my Full-Stack Developer certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Borrador Products Landing Page"
            img={'https://user-images.githubusercontent.com/61193321/112748800-3753f100-8fb6-11eb-97d7-6a69c72268f7.png'}
            tech="js css node"
            link="https://borrador-cosmetiques.herokuapp.com/"
            repo="https://github.com/Walf-dev/borrador-cosmetiques"
          >
            <small>
              Built using Node, Express, Javascript, Jquery, Html, CSS + Bootstrap.
            </small>
            <p>
             A landing page for a cosmetic startup.
            </p>
          </Project>
          <Project
            title="React ToDo App"
            img={'https://user-images.githubusercontent.com/61193321/112749786-91f04b80-8fbc-11eb-8c85-ca043ae81da9.png'}
            tech="js react node css"
            link="https://walf-dev-react-todo-app.herokuapp.com/"
            repo="https://github.com/Walf-dev/react-todo-app"
          >
            <small>
             Built using Node, Express, React, CSS.
            </small>
            <p>
             This is a productivity app to manage your tasks.
            </p>
          </Project>

          <Project
            title="American/British translator."
            img={'https://user-images.githubusercontent.com/61193321/90804074-9dd2ab80-e311-11ea-9b86-e82373ec6c43.jpg'}
            tech="js node css"
            link="https://wagni-american-british-translator.glitch.me/"
            repo="https://github.com/Walf-dev/American-British-English-Translator"
          >
            <small>
             Built using Node, Express,Javascript + jQuery, CSS + Bootstrap.
            </small>
            <p>
             This is a full-stack app that I made which lets the users translate american english to british english and vice versa.
            </p>
          </Project>
          <Project
            title="Personal Library."
            img={'https://user-images.githubusercontent.com/61193321/90804754-8d6f0080-e312-11ea-845a-5d2b903afb8e.jpg'}
            tech="js node css"
            link="https://walf-personal-library.glitch.me/"
            repo="https://github.com/Walf-dev/Personal-Library"
          >
            <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and HTML.</small>
            <p>
              A full-stack website to store book titles and comments to each book into a remote database.
            </p>
          </Project>
          <Project
            title="Issue Tracker."
            img={'https://user-images.githubusercontent.com/61193321/90805062-053d2b00-e313-11ea-813b-dbc0a2fd0b42.jpg'}
            tech="js node css"
            link="https://wagni-issue-tracker-app.glitch.me/"
            repo="https://github.com/Walf-dev/Issue-Tracker"
          >
            <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap.</small>
            <p>Yet another full-stack app to save and manage technical issues to be fixed.</p>
          </Project>
          <Project
            title="URL Shortener Microservice."
            img={'https://user-images.githubusercontent.com/61193321/90805238-446b7c00-e313-11ea-967d-0b3e6e10d4c4.jpg'}
            tech="js node css"
            link="https://wagni-url-shortener-api.glitch.me/"
            repo="https://github.com/Walf-dev/URL-Shortener-Microservice"
          >
            <small>Built using Node, Express, CSS + Bootstrap and Html.</small>
            <p>
             A microservice which takes a raw URL and makes it a short link to make it easy to sent it through the Internet.
            </p>
          </Project>
          <Project
            title="Metric Converter."
            img={'https://user-images.githubusercontent.com/61193321/90806458-f35c8780-e314-11ea-89f3-8e37b14e4074.jpg'}
            tech="js node css"
            link="https://wagni-metric-imperial-converter.glitch.me/"
            repo="https://github.com/Walf-dev/Metric-Imperial-Converter"
          >
            <small>Built using Node, Express, CSS + Bootstrap and Html.</small>
            <p>
             A Metric Converter wich converts 'gal, l, mi, km, lbs, kg'.
            </p>
          </Project>
          <Project
            title="Bar Chart."
            img={'https://user-images.githubusercontent.com/61193321/90808485-fc9b2380-e317-11ea-8884-f47c9b25a8c5.jpg'}
            tech="js d3 css"
            link="https://codepen.io/Wagni/full/RwrQOpo"
          >
            <small>Built using CSS, JS and D3.js.</small>
            <p>
             A bar chart representing the evolution of Cameroon GDP.
            </p>
          </Project>
          <Project
            title="Treemap Diagram."
            img={'https://user-images.githubusercontent.com/61193321/90808705-5bf93380-e318-11ea-9c12-9d765a871c15.jpg'}
            tech="js d3 css"
            link="https://codepen.io/Wagni/full/KKVRrYa"
          >
            <small>Built using CSS, JS and D3.js .</small>
            <p>A treemap diagram representing prices of video games.</p>
          </Project>
          <Project
            title="Choropleth Map."
            img={'https://user-images.githubusercontent.com/61193321/90808549-19cff200-e318-11ea-82b2-620cac8abccb.jpg'}
            tech="js d3 css"
            link="https://codepen.io/Wagni/full/vYLjrKx"
          >
            <small>Built using CSS, JS and D3.js .</small>
            <p>
             A choropleth map representing the educational attainment by county in the U.S.
            </p>
          </Project>
          <Project
            title="Scatterplot Graph."
            img={'https://user-images.githubusercontent.com/61193321/90808632-3d933800-e318-11ea-9a33-429cbdada029.jpg'}
            tech="js d3 css"
            link="https://codepen.io/Wagni/full/YzwaxMZ"
          >
            <small>Built using CSS, JS and D3.js .</small>
            <p>A Scatterplot Graph representing doping in professional bicycle racing.</p>
          </Project>
          <Project
            title="Random Quote Machine."
            img={'https://user-images.githubusercontent.com/61193321/90807645-af6a8200-e316-11ea-9454-e68f8d2e5082.jpg'}
            tech="js react css"
            link="https://codepen.io/Wagni/full/qBOmrVP"
          >
            <small>Built using React and CSS + Bootstrap.</small>
            <p>A random quoting app which retrieves quotes from an API.</p>
          </Project>
          <Project
            title="Javascript Calculator."
            img={'https://user-images.githubusercontent.com/61193321/90808097-6830c100-e317-11ea-83aa-f2018e56cfe3.jpg'}
            tech="js react css"
            link="https://codepen.io/Wagni/full/jOWGLpb"
          >
            <small>Built using React and CSS.</small>
            <p>A project on which I built a virtual calculator with its usual features.</p>
          </Project>
          <Project
            title="Pomodoro clock."
            img={'https://user-images.githubusercontent.com/61193321/90808009-46cfd500-e317-11ea-9db4-5cffabdcbb57.jpg'}
            tech="js react css"
            link="https://codepen.io/Wagni/full/mdVqqwr"
          >
            <small>Built using React and CSS.</small>
            <p>A cute and animated Pomodoro clock to help the users improve their productivity.</p>
          </Project>
          <Project
            title="Drum machine."
            img={'https://user-images.githubusercontent.com/61193321/90807842-feb0b280-e316-11ea-8a3a-a8cfeed6d7e4.jpg'}
            tech="js react css"
            link="https://codepen.io/Wagni/full/eYpeNep"
          >
            <small>Built using React and Sass.</small>
            <p>
             A drum machine app which retrieves samples from an API.
            </p>
          </Project>
          <Project
            title="Technical Documentation Page."
            img={'https://user-images.githubusercontent.com/61193321/90807545-8a760f00-e316-11ea-8344-ee17074ede6f.jpg'}
            tech="js css"
            link="https://codepen.io/Wagni/full/QWbyjKL"
          >
            <small>Built using Html and CSS.</small>
            <p>A technical documentation page made for electrical generators.</p>
          </Project>
     
        </div>
      </div>
    </section>
  );
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact Fred?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to 
                 <a href="starkwagni@gmail.com"><i className="email"> starkwagni@gmail.com</i></a>
              
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="mailto:starkwagni@gmail.com" method="post">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Fredoly WAGNI.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return (
    <div className="social">
       <a
        href="mailto:starkwagni@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Send me an email"
      >
        {' '}
          <i className="fa fa-envelope" />
         </a>
      <a
        href="https://twitter.com/walfizer"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to my Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/walf-dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to my GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/Wagni"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to my Codepen Profile"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
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
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}

export default App;