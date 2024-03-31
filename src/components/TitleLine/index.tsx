import { Box, Divider, Text } from "@chakra-ui/react";

const TitleLine = ({ name }: { name: string }) => {
  return (
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
        {name}
      </Text>
      <Divider
        orientation="horizontal"
        h="1px"
        bgColor="#C778DD"
        width={"50%"}
      />
    </Box>
  );
};

export default TitleLine;
