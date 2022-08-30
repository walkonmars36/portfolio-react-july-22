import "./App.scss";
import "./components/FontAwesomeIcons/FontAwesomeIcons";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      {/* <Skills />
      <Projects />
      <AboutMe />
      <Footer /> */}
    </div>
  );
}

export default App;
