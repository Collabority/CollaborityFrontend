import React from "react";
import Hero from "../../Components/HeroSection/Hero";
import AboutSection from "../../Components/AboutSection/AboutSection";
import WhoWeAreSection from "../../Components/WhoWeAreSection/WhoWeAreSection";
import TechStackSection from "../../Components/TechStackSection/TechStackSection";
import LatestBlogSection from "../../Components/LatestBlogSection/LatestBlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhoWeAreSection />
      <TechStackSection />
      <LatestBlogSection />
    </>
  );
};

export default Home;
