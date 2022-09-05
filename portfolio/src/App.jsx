import {useState} from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";
import {Sling as Hamburger} from "hamburger-react";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="app">
      <Header handleToggleNav={handleToggleNav} Hamburger={Hamburger} navOpen={navOpen} setNavOpen={setNavOpen} />

      <CSSTransition in={showNav} timeout={500} classNames="open-nav" unmountOnExit>
        <Nav handleToggleNav={handleToggleNav} />
      </CSSTransition>

      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
