import { Box, Divider, Text } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <Box>
      <Box display={"flex"} gap={"20px"} alignItems={"center"}>
        <Text
          style={{
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "42px",
            color: "white"
          }}
        >
          <small style={{ color: "#c778dd" }}>#</small>
          projects
        </Text>
        <Divider
          orientation="horizontal"
          h="1px"
          bgColor="#C778DD"
          width={"50%"}
        />
      </Box>
    </Box>
  );
};

export default Desktop;
