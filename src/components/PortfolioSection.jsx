import React, { useEffect, useState } from "react";
import { db } from "../utils";
import {onValue, ref} from 'firebase/database'

const PortfolioSection = () => {

  const [projectData, setProjectdata] = useState(null)

  useEffect(() => {
    const projectRef = ref(db,'projects')
    onValue(projectRef, (snapshot) => {
    const data = snapshot.val()
    setProjectdata(data)
  })
  },[])
  
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        {/* <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div
          className="row"
          data-aos="fade-up"
          data-aos-delay="100"
        >
        {
          projectData === null ? "Loading project data..." : projectData.map((item,index) => {
            return <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={`assets/img/portfolio/${item?.fileName}`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a href={item?.projectLink} target="_blank" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
          })
        }
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
