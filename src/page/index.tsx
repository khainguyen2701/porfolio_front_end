import { Box } from "@chakra-ui/react";
import Layout from "../Layout";
import Banner from "../components/Banner";
import Quotes from "../components/Quotes";
import Project from "../components/Project";
import Skill from "../components/Skill";
import AboutMe from "../components/AboutMe";

const HomePage = () => {
  return (
    <Layout>
      <Box display={"flex"} gap={"61px"} flexDirection={"column"}>
        <Banner />
        <Quotes />
        <Project />
        <Skill />
        <AboutMe />
      </Box>
    </Layout>
  );
};

export default HomePage;
