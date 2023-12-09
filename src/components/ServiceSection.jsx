import React from "react";

const ServiceSection = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Extra-Currilcular Activities</h2>
        </div>

        <div className="row">
          {/* <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <h4 className="title">
              <a href="">Lorem Ipsum</a>
            </h4>
            <p className="description">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </div> */}
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="bi bi-card-checklist"></i>
            </div>
            <h4 className="title">
              <a href="">Reading technical blogs related to UX.</a>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h4 className="title">
              <a href="">Testing and working on pre build websites in a market.</a>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="bi bi-binoculars"></i>
            </div>
            <h4 className="title">
              <a href="">Research on different website designs.</a>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i className="bi bi-brightness-high"></i>
            </div>
            <h4 className="title">
              <a href="">Worked as freelancer.</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
