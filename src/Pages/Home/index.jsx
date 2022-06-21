import NavBar from "../../Sections/Navbar";
import * as Style from "./style";
import { MenuSelectControlContext } from "../../Providers/MenuSelectControl";
import { useContext, useEffect, useState } from "react";
import HomeSection from "../../Sections/HomeSection";
import AboutSection from "../../Sections/AboutSection";
import TechnologiesSection from "../../Sections/TechnologiesSection";
import ProjectsSection from "../../Sections/ProjectsSection";
import TalkToMeSection from "../../Sections/TalkToMeSection";

const Home = () => {
  const { menuSelected, handleChangeMenuSelected } = useContext(
    MenuSelectControlContext
  );
  console.log(menuSelected);

  return (
    <>
      <Style.HomePageSection>
        <NavBar />
        {/* <ApresentationHome /> */}
        <Style.CardApresentation>
          {menuSelected === "HomeSection" && <HomeSection />}
          {menuSelected === "AboutSection" && <AboutSection />}
          {menuSelected === "TechnologiesSection" && <TechnologiesSection />}
          {menuSelected === "ProjectsSection" && <ProjectsSection />}
          {menuSelected === "TalkToMeSection" && <TalkToMeSection />}
        </Style.CardApresentation>
      </Style.HomePageSection>
    </>
  );
};

export default Home;
