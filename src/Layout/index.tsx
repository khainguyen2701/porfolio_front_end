import { Box, Container } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container maxW="md" centerContent>
      <Box style={{ width: "80%" }}>
        <Box style={{ gap: "61px", display: "flex", flexDirection: "column" }}>
          <Box>{isMobile ? "" : <Header />}</Box>
          <Box>{children}</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
