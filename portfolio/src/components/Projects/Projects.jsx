import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <section class="projects">
      <h2 class="projects__heading">
        <span class="undershadow">My Projects</span>
      </h2>

      <div class="projects__container">
        <div class="projects__card--1">
          <div class="projects__client-project">
            <div class="projects__client-project--image">
              <img src="./assets/laptop-dog.png" alt="laptop-dog" />
            </div>
          </div>

          <div class="projects__details">
            <h4 class="projects__details--sub-heading">REACT</h4>
            <h2 class="projects__heading--bigger">Client Project</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code</p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" />

                <p class="projects__code--text">Preview</p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects__card--2">
          <div class="projects__rest-api">
            <div class="projects__placeholder-image"></div>
          </div>

          <div class="projects__details">
            <h4 class="projects__details--sub-heading">JAVA, SPRING BOOT</h4>
            <h2 class="projects__heading--bigger">REST API</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code </p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" />

                <p class="projects__code--text">Preview </p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects__card--3">
          <div class="projects__punk-api">
            <div class="projects__placeholder-image"></div>
          </div>

          <div class="projects__details">
            <h4 class="projects__sub-heading">REACT</h4>
            <h2 class="projects__heading--bigger">PUNK API</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code </p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" /> <p class="projects__code--text">Preview </p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects__tablet-and-larger projects__card--4">
          <div class="projects__client-project">
            <div class="projects__client-project--image">
              <img src="./assets/laptop-dog.png" alt="laptop-dog" />
            </div>
          </div>

          <div class="projects__details">
            <h4 class="projects__details--sub-heading">REACT</h4>
            <h2 class="projects__heading--bigger">Client Project</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code</p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" />

                <p class="projects__code--text">Preview</p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects__tablet-and-larger projects__card--5">
          <div class="projects__rest-api">
            <div class="projects__placeholder-image"></div>
          </div>

          <div class="projects__details">
            <h4 class="projects__details--sub-heading">JAVA, SPRING BOOT</h4>
            <h2 class="projects__heading--bigger">REST API</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code </p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" />

                <p class="projects__code--text">Preview </p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects__tablet-and-larger projects__card--6">
          <div class="projects__punk-api">
            <div class="projects__placeholder-image"></div>
          </div>

          <div class="projects__details">
            <h4 class="projects__sub-heading">REACT</h4>
            <h2 class="projects__heading--bigger">PUNK API</h2>
            <p class="projects__description">Maecenas accumsan tincidunt id et in ut diam sit. Metus, nec, augue urna gravida nisl, tortor sapien nec sollicitudin.</p>

            <div class="projects__code">
              <div class="projects__code--block">
                <p class="projects__code--text">Code </p>
                <img src="./assets/carbon_code.png" alt="markup-brackets" /> <p class="projects__code--text">Preview </p>
                <img src="./assets/eye.png" alt="eyeball image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
