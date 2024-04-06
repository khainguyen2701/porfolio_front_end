import { Box } from "@chakra-ui/react";
import TitleLine from "../../TitleLine";
import TimeLine from "../../TimeLine";

const Desktop = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ base: 10, md: 30 }}>
      <TitleLine name="work experiences" />
      <TimeLine />
    </Box>
  );
};

export default Desktop;
