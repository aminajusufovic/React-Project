import React from "react";
import "../App.css";

function About() {
  return (
    <main>
      <nav className="aboutNav">
        <p className="aboutLink">Home /</p>
        <p className="aboutLink">About</p>
      </nav>
      <img
        className="aboutSlika"
        src="hero-bcg.a876f19f.jpeg"
        alt="nice desk"
      />

      <div className="aboutTitle">
        <h2>Our story</h2>
        <p>
          <b className="aboutUnderline">________</b>
        </p>
      </div>
      <p className="aboutTekst">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
        sequi blanditiis est exercitationem molestiae delectus saepe odio
        eligendi modi porro eaque in libero minus unde sapiente consectetur
        architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum
        totam velit saepe sed quos similique amet. Ex, voluptate accusamus
        nesciunt totam vitae esse iste.
      </p>
      <div className="aboutFooterr">
        <footer> © 2022 ComfySloth All rights reserved </footer>
      </div>
    </main>
  );
}

export default About;
