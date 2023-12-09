import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Welcome to my creative space where pixels come to life and user
            experiences thrive. I'm{" "}
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Kanchan Sharma
            </span>
            , a passionate <span style={{ fontWeight: "bold" }}>UI/UX</span>{" "}
            designer with a keen eye for detail and a love for crafting digital
            experiences that leave a lasting impression.
          </p>
        </div>

        <div className="row">
          {/* <div className="col-lg-4" data-aos="fade-right">
            <img
              src="/assets/img/profile-img.jpeg"
              className="img-fluid"
              alt=""
            />
          </div> */}
          <div className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <div className="__about__section__digital__delight">
              <h5>Crafting Digital Delight</h5>
              <p className="">
                In the ever-evolving realm of digital design, I stand as a
                dedicated explorer, constantly pushing the boundaries to create
                visually stunning and intuitively functional interfaces. With a
                background in UI Designing, I bring a unique blend of technical
                expertise and creative flair to every project I undertake.
              </p>
            </div>

            <div className="__about__section__User__Centric_Design pt-4">
              <h5>User-Centric Design</h5>
              <p>
                I believe that great design is not just about aesthetics; it's
                about enhancing the user's journey, making it seamless,
                enjoyable, and memorable. Through a meticulous process of
                research, wireframing, prototyping, and testing, I ensure that
                every design decision serves the ultimate goal of providing an
                exceptional user experience.
              </p>
            </div>

            <div className="__about__section__collaboration__main pt-4">
              <h5>Collaboration and Innovation</h5>
              <p>I thrive in collaborative environments, working closely with cross-functional teams to transform ideas into visually compelling and user-friendly interfaces. Whether it's a web application, mobile app, or a responsive website, I bring a holistic approach to design that combines creativity with functionality.</p>
            </div>

            <div className="__about__section__toolbox__main pt-4">
              <h5>My Toolbox</h5>
              <p>In my design journey, I've honed my skills using a variety of tools and technologies. From Figma for pixel-perfect designs to prototyping for interactive mockups, I leverage the latest tools to bring concepts to life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
