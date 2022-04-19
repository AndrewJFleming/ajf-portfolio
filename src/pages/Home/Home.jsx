import React from "react";

import { Container } from "react-bootstrap";
import ContactMe from "../../components/ContactMe/ContactMe";
import FAQ from "../../components/FAQ/FAQ";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Showcase from "../../components/Showcase/Showcase";
import Technologies from "../../components/Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Technologies />
      <FeaturedProjects />
      <ContactMe />
      <FAQ />
    </div>
  );
};

export default Home;
