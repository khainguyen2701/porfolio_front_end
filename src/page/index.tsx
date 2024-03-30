import { Box } from "@chakra-ui/react";
import Layout from "../Layout";
import Banner from "../components/Banner";
import Quotes from "../components/Quotes";
import Project from "../components/Project";

const HomePage = () => {
  return (
    <Layout>
      <Box display={"flex"} gap={"61px"} flexDirection={"column"}>
        <Banner />
        <Quotes />
        <Project />
      </Box>
    </Layout>
  );
};

export default HomePage;
