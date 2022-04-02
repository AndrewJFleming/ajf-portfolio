import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutThumbs from "./AboutThumbs/AboutThumbs.jsx";
import AboutIndex from "./AboutIndex/AboutIndex.jsx";

import { Container, Row, Col } from "react-bootstrap";
import { projectRows } from "../../data.js";
import Portrait from "../../assets/images/portrait.png";
import CertImage from "../../assets/images/certificate.png";
import Cert from "../../assets/certificate.pdf";
import "./About.css";

const About = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    //Merge projects arrays from array of projectRows into single array
    let allProjects = [];
    projectRows.forEach((r) => r.projects.forEach((p) => allProjects.push(p)));
    setAllProjects(allProjects);
  }, []);

  return (
    <div>
      <Container>
        <Row className="pb-5 about-page-wrapper">
          <Col md="4">
            <AboutIndex />
          </Col>
          <Col md="8">
            <div>
              <img
                className="about-portrait"
                src={Portrait}
                alt="Andrew J Fleming about page portrait"
              />
              <h2 id="intro">Andrew Fleming</h2>
              <h5>Frontend Web Developer</h5>
              <p>
                I'm a freelance frontend web developer from Seattle building
                apps with the MERN stack (MongoDB, Express.js, React.js, and
                Node.js). My focus is on frontend development but I also build
                APIs and manage databases. In addition to JavaScript related
                technologies, I have experience building custom WordPress themes
                with PHP.
              </p>
            </div>

            <div className="clear-floats">
              <hr />
              <div className="about-page-section">
                <h4 id="highlightedExp">Highlighted Professional Experience</h4>
                <h5 id="poi">Portraits of Iowa</h5>
                <p>
                  Recent noteworthy freelance work includes a website for{" "}
                  <Link to="/projects/portraits-of-iowa">
                    Portraits of Iowa
                  </Link>
                  ; a project commissioned for a public art installation in
                  Cedar Rapids, Iowa. My client's installation involved
                  gathering hundreds of photo submissions from Cedar Rapids
                  residents that would then be assembled into a hanging
                  gallery/sculpture. My site outlined the goals of the project
                  to community contributors, and provided them with an upload
                  component for sending photos to Firebase storage.
                </p>
                <div className="about-thumbs-container">
                  <img
                    style={{ maxWidth: "250px" }}
                    src={
                      allProjects?.find((p) => p.title === "Portraits of Iowa")
                        ?.img
                    }
                    alt="Portraits of Iowa about page thumb"
                  />
                </div>
              </div>
              <hr />
              <div className="about-page-section">
                <h5 id="artistPortfolio">
                  John Fleming and Amanda Sargent Artist Portfolios
                </h5>
                <p>
                  Furthering my experience designing websites for professional
                  artists, I was recently contracted to design custom WordPress
                  themes for two artist portfolio websites; The{" "}
                  <Link to="/projects/a-s-artist-portfolio">John Fleming</Link>{" "}
                  and the{" "}
                  <Link to="/projects/a-s-artist-portfolio">
                    Amanda Sargent
                  </Link>{" "}
                  artist portfolio websites. With both themes, users can browse
                  the portfolios by category and can visit portfolio item pages
                  to examine posts in greater detail.
                </p>
                <AboutThumbs projects={allProjects} projectType="wp" />
              </div>

              <hr />
              <div className="about-page-section">
                <h5 id="mernProjects">MERN Stack Projects</h5>
                <p>
                  The latest additions to my GitHub are web apps built with the
                  MERN stack.{" "}
                  <Link to="/projects/embossed-react-ecommerce">
                    Embossed React Ecommerce
                  </Link>
                  ,{" "}
                  <Link to="/projects/purgation-react-blog">
                    Purgation React Blog
                  </Link>
                  , and <Link to="/projects/critique-me">CritiqueMe</Link> are
                  all CRUD apps and the{" "}
                  <Link to="/projects/embossed-react-ecommerce">
                    Embossed project
                  </Link>{" "}
                  includes an admin dashboard for managing the store's user and
                  product data.
                </p>
                <AboutThumbs projects={allProjects} projectType="mern" />
              </div>
              <hr />
              <div className="about-page-section">
                <h4 id="explore">Exploring My Projects</h4>
                <p>
                  You can view the code for the projects described in this
                  introduction on my{" "}
                  <a href="https://github.com/AndrewJFleming/AndrewJFleming">
                    GitHub account
                  </a>{" "}
                  and live site versions of many of these projects are currently
                  being hosted using the Netlify and Heroku. The links to those
                  live sites are provided in the Readmes for the project's
                  respective GitHub repository.
                </p>
              </div>
              <hr />
              <div className="about-page-section">
                <h4 id="education">Education</h4>
                <p>
                  I graduated from the{" "}
                  <a href="https://www.saic.edu/">
                    School of the Art Institute of Chicago
                  </a>{" "}
                  with a Bachelors of Fine Arts. I also completed the{" "}
                  <a href={Cert}>Web Development Career Path</a> course offered
                  by{" "}
                  <a href="https://www.codecademy.com/?g_network=g&g_device=c&g_adid=528849219079&g_keyword=codecademy&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=70946090375&g_keywordid=kwd-41065460761&g_campaign=US_Brand_Exact&g_campaignid=1955172604&utm_id=t_kwd-41065460761:ag_70946090375:cp_1955172604:n_g:d_c&utm_term=codecademy&utm_campaign=US_Brand_Exact&utm_source=google&utm_medium=paid-search&utm_content=528849219079&hsa_acc=2430397011&hsa_cam=1955172604&hsa_grp=70946090375&hsa_ad=528849219079&hsa_src=g&hsa_tgt=kwd-41065460761&hsa_kw=codecademy&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw0PWRBhDKARIsAPKHFGgmB_dcaM2fzLX7tcCuOJ-g_g-NM796tWNjwGXjDwqMORbY64sMKYsaAlmnEALw_wcB">
                    Codeacademy
                  </a>
                  .
                </p>
                <div>
                  <a href={Cert}>
                    <img
                      width="100%"
                      src={CertImage}
                      alt="certification screenshot"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
