import React from "react";

import "./AboutThumbs.css";

const AboutThumbs = ({ projects, projectType }) => {
  return (
    <div className="about-thumbs-container">
      {projects
        ?.filter((p) => p.type === projectType)
        .map((filteredItem) => (
          <div className="about-thumb-wrapper" key={filteredItem.id}>
            <img
              src={filteredItem.img}
              alt={`${filteredItem.title} about page thumb`}
            />
          </div>
        ))}
    </div>
  );
};

export default AboutThumbs;
