import React from "react";

const FactsSection = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Let's Create Together</h2>
          <p>
          I invite you to explore my portfolio and witness the diverse range of projects that reflect my passion for design. If you're seeking a UI/UX designer who is not only skilled in their craft but also deeply invested in the success of your project, let's connect. I'm excited to collaborate, innovate, and bring your digital vision to reality.
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Visuals Design</strong>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Wireframing/Prototyping</strong>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Team Collaboration</strong>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>User Research</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
