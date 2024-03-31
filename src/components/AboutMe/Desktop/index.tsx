import { Box, Image, Text } from "@chakra-ui/react";
import TitleLine from "../../TitleLine";

const Desktop = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={60} mb={60}>
      <TitleLine name="about-me" />
      <Box display={"flex"} gap={6} justifyContent="space-between">
        <Box w="100%">
          <Box
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              alignItems: "left",
              padding: "10px"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "26px",
                color: "#ABB2BF"
              }}
            >
              Hello, my full is Nguyễn Văn Khải!
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "26px",
                color: "#ABB2BF"
              }}
            >
              I'm a front-end developer with 2+ years of experience. I can
              develop responsive websites from the ground up and enhance them
              into modern, user-friendly web experiences
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "26px",
                color: "#ABB2BF"
              }}
            >
              Turning my experience and knowledge into websites with good UI/UX
              in the past 2 years. I have helped many different clients
              establish their online presence. I always try to learn about the
              latest technologies and frameworks
            </Text>
          </Box>
        </Box>
        <Box w="100%" display={"flex"} justifyContent={"end"}>
          <Box>
            <Image
              boxSize="450px"
              src="src/assets/Group 50.png"
              alt="Image Alternatively"
              objectFit={"contain"}
              style={{ borderBottom: "2px solid #ABB2BF" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
