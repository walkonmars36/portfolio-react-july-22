import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section class="about-me">
      <h2 class="about-me__header">ABOUT ME</h2>
      <div class="about-me__container">
        <div class="about-me__profile">
          <div class="about-me__imgs">
            <div class="about-me__imgs--profile-pic"></div>
            <img class="about-me__imgs--fingerprint" src="./assets/fingerprint.svg" alt="fingerprint image" />
            <img class="about-me__imgs--wavy-line" src="./assets/wavy-line.png" alt="wavy line image" />
          </div>
        </div>

        <div class="about-me__info">
          <p class="about-me__text">
            Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus. Sodales pretium tempus tincidunt tellus in imperdiet. Integer fames maecenas amet,
            consequat. Et cursus gravida enim lorem urna, vivamus pulvinar porttitor. Ultrices neque nec feugiat ullamcorper ultricies ante sagittis commodo.
          </p>
          <p class="about-me__text">
            Nunc malesuada amet at eget consectetur sit. Nibh in ut diam nulla sed porttitor et. At neque tellus convallis urna, sodales neque. In enim auctor diam nunc duis rutrum adipiscing pellentesque eu. In sollicitudin neque dictum neque proin
            pretium ante. Ac bibendum vestibulum ullamcorper pellentesque scelerisque. Neque senectus eu dictum ultricies tellus nisl eget sem libero. Eu sit quis vestibulum donec cras elementum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
