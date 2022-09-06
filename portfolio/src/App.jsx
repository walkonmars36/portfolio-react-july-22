import {useState} from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";
import Hamburger from "hamburger-react";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {Element} from "react-scroll";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleNavOpen = () => {
    setNavOpen(false);
    setShowNav(false);
  };

  return (
    <div className="app">
      <Header handleToggleNav={handleToggleNav} Hamburger={Hamburger} navOpen={navOpen} setNavOpen={setNavOpen} />

      <CSSTransition in={showNav} timeout={500} classNames="open-nav" unmountOnExit>
        <Nav handleNavOpen={handleNavOpen} />
      </CSSTransition>

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about-me">
        <AboutMe />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
