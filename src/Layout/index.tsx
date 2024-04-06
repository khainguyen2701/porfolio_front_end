import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container centerContent>
      <Box style={{ width: "80%", marginBottom: "60px" }}>
        <Box style={{ gap: "61px", display: "flex", flexDirection: "column" }}>
          <Header />
          <Box>{children}</Box>
        </Box>
      </Box>
      <Box w={"100%"}>
        <Footer />
      </Box>
      <div style={{ marginBottom: 20 }}></div>
    </Container>
  );
};

export default Layout;
