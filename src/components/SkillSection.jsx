import React from "react";

const SkillSection = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            A UI/UX designer should possess a diverse set of skills to create visually appealing and user-friendly digital experiences. Here's are the list of my skills associated with UI/UX designers:
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="">
              <h5>UI Design Skills:</h5>
              <ul>
                <li>Visual Design:
                  <ul>
                    <li>Knowledge of color theory, typography, and layout principles.</li>
                    <li>Ability to create visually pleasing and cohesive designs.</li>
                  </ul>
                </li>

                <li>Graphic Design Tools:
                  <ul>
                    <li>Proficiency in design tools such as Adobe Creative Suite (Figma, Illustrator) or Sketch.</li>
                  </ul>
                </li>

                <li>UI Prototyping:
                  <ul>
                    <li>Skill in creating interactive prototypes using tools like Figma, Sketch, or Adobe XD.</li>
                  </ul>
                </li>

                <li>Responsive Design:
                  <ul>
                    <li>Understanding of designing interfaces that adapt to different screen sizes and devices.</li>
                  </ul>
                </li>

                <li>Iconography:
                  <ul>
                    <li>Ability to create and implement iconography that enhances user understanding and navigation.</li>
                  </ul>
                </li>

                <li>Grid Systems:
                  <ul>
                    <li>Knowledge of grid systems for creating layouts that align with design principles.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="">
            <h5>UX Design Skills:</h5>
              <ul>
                <li>User Research:
                  <ul>
                    <li>Conducting user interviews, surveys, and usability testing to gather insights.</li>
                  </ul>
                </li>

                <li>Information Architecture:
                  <ul>
                    <li>Structuring and organizing information to optimize user flow and accessibility.</li>
                  </ul>
                </li>

                <li>Wireframing:
                  <ul>
                    <li>Creating low-fidelity wireframes to outline the basic structure and elements of a design.</li>
                  </ul>
                </li>

                <li>Prototyping:
                  <ul>
                    <li>Developing high-fidelity interactive prototypes for user testing and feedback.</li>
                  </ul>
                </li>

                <li>Usability Testing:
                  <ul>
                    <li>Conducting usability tests to evaluate the effectiveness of a design.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
