import React, { useEffect } from "react";
import Typed from "typed.js";
import { select } from "../utils";

const HeroSection = () => {
  useEffect(() => {
    const typed = select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  });

  return (
    <section
      id="hero"
      className="d-flex justify-content-start align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Kanchan Sharma</h1>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="UI/UX Designer, Design Innovator, Freelancer Designer"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
