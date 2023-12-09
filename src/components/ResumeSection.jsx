import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
          Working as a Designer with 1 years of experience as a ReactJS Developer and 1 years of experience as a UI/UX Designer and having 5 to 7 months of relevant experience in Frontend designing, seeking full-time UI/UX roles.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Kanchan Sharma</h4>
              <p>
                <em>
                  Innovative and deadline-driven UI/UX Designer with 2 years
                  of experience designing and developing user-centered user interface.
                </em>
              </p>
              <ul>
                <li>New Delhi, India</li>
                <li>kanchansharma1408@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Post Graduation</h4>
              <h5>2020 - 2022</h5>
              <p>
                <em>IGNOU, Delhi, India</em>
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Associate UI/UX Designer</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Noida, UP, India </em>
              </p>
              <ul>
                <li>
                Working as a design coordinator in a team.
                </li>
                <li>
                Main focus on company core application such as company officials website and design interface for mobile apps or digital tools.
                </li>
                <li>
                Helping in digital transformation for the company growth and management.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>2022 - 2022</h5>
              <p>
                <em>Noida, UP, India</em>
              </p>
              <ul>
                <li>
                Worked on core frontend development part with ReactJS, Redux, tailwincss, ANT designs with different teams on company clients project.
                </li>
                <li>
                Worked on an agile environment with weekly track of bugs in Github etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
