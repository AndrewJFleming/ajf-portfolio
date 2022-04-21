import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import PopUp from "./PopUp/PopUp.jsx";
import { projectRows } from "../../data.js";
import "./SingleProject.css";

const SingleProject = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [portfolioItem, setPortfolioItem] = useState({});
  const { projectSlug } = useParams();

  useEffect(() => {
    //Merge projects arrays from array of projectRows into single array
    let allProjects = [];
    projectRows.forEach((r) => r.projects.forEach((p) => allProjects.push(p)));
    setAllProjects(allProjects);
    console.log("Projects: ", allProjects);
  }, []);

  useEffect(() => {
    //Identify project with slug value matching pathname slug.
    setPortfolioItem(
      allProjects.find((project) => project.slug === projectSlug)
    );
  }, [allProjects]);

  return (
    <div className="py-5">
      {portfolioItem ? (
        <Container>
          <Row className="pb-5">
            <Col md="4" className="single-project-info-col">
              <img
                src={portfolioItem.img}
                alt={`${portfolioItem.title} single project page icon`}
              />
            </Col>

            <Col md="8">
              <h2>{portfolioItem.title}</h2>

              <p
                className="brief-description"
                dangerouslySetInnerHTML={{
                  __html: portfolioItem.fullDesc
                    ? portfolioItem.fullDesc
                    : portfolioItem.brief,
                }}
              ></p>

              <div className="external-links-wrapper mt-2">
                {portfolioItem.gitHub && (
                  <a
                    className="github-external-link"
                    target="_blank"
                    rel="noreferrer"
                    href={portfolioItem.gitHub}
                  >
                    Project GitHub repository
                  </a>
                )}
                {portfolioItem.demo && (
                  <a target="_blank" rel="noreferrer" href={portfolioItem.demo}>
                    Project demo live site
                  </a>
                )}
              </div>
            </Col>
          </Row>
          <h4 className="pb-3">Project Screenshots</h4>
          <Row>
            {portfolioItem.screenshots?.length &&
              portfolioItem.screenshots.map((screenshot) => (
                <Col
                  className="single-project-img-col"
                  xs="12"
                  sm="6"
                  md="6"
                  lg={portfolioItem.screenshots.length < 4 ? "4" : "3"}
                  key={screenshot.id}
                >
                  <PopUp
                    src={screenshot.img}
                    alt={`${portfolioItem.title} single project page screenshot`}
                    caption={screenshot.caption}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default SingleProject;
