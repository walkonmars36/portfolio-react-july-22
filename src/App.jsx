import {useState} from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import ProjectsList from "./containers/ProjectsList/ProjectsList";
import projectsArray from "./data/projectsArray";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hamburger from "hamburger-react";

import {Element} from "react-scroll";
import Overlay from "./components/Overlay/Overlay";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleNavLink = () => {
    setNavOpen(false);
    setShowNav(false);
  };

  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div className="app">
      <Header handleToggleNav={handleToggleNav} Hamburger={Hamburger} navOpen={navOpen} setNavOpen={setNavOpen} />

      {navOpen && <Overlay />}
      <Nav handleNavLink={handleNavLink} showNav={showNav} />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about-me">
        <AboutMe />
      </Element>

      <Element name="projects">
        <ProjectsList projectsArray={projectsArray} />
      </Element>

      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
