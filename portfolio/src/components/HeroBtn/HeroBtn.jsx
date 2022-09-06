import React from "react";
import "./HeroBtn.scss";
import Scroll from "react-scroll";
const Link = Scroll.Link;

const HeroBtn = () => {
  return (
    <div className="hero__btn-container">
      <Link to="projects" smooth={true} duration={500} className="hero__btn-link">
        <button className="hero__btn">Take a look at my work</button>
      </Link>
    </div>
  );
};

export default HeroBtn;
