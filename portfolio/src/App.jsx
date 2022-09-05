import {useState} from "react";
import "./App.scss";
import "./components/FontAwesomeIcons/FontAwesomeIcons";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="app">
      <Header handleToggleNav={handleToggleNav} />

      <CSSTransition in={showNav} timeout={350} classNames="openNav" unmountOnExit>
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
