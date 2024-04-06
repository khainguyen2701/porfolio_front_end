import { Box } from "@chakra-ui/react";
import Layout from "../Layout";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contacts from "../components/Contact";
import Project from "../components/Project";
import Skill from "../components/Skill";
import WorkExp from "../components/WorkExp";

const HomePage = () => {
  return (
    <Layout>
      <Box display={"flex"} gap={"61px"} flexDirection={"column"}>
        <Banner />
        <Project />
        <Skill />
        <WorkExp />
        <AboutMe />
        <Contacts />
      </Box>
    </Layout>
  );
};

export default HomePage;
