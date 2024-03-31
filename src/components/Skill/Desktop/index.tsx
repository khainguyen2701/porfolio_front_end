import { Box, Flex, Image, Text } from "@chakra-ui/react";
import TitleLine from "../../TitleLine";

const languages = ["Javascript", "Typescript", "Java Basic", "C++ Basic"];
const tools = [
  "Visual Studio Code",
  "Visual Code",
  "Intellij IDE",
  "PostMan",
  "Figma"
];
const frameWorks = ["React JS", "Next JS"];
const other = ["HTML", "CSS", "SCSS", "EJS", "REST API"];

const Desktop = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={60}>
      <TitleLine name="skills" />
      <Box display={"flex"} gap={60}>
        <Box style={{ width: "40%" }}>
          <Image src="src/assets/Group 36.png" alt="group 36" />
        </Box>{" "}
        <Box display={"flex"} justifyContent={"flex-start"} gap={20}>
          <Box
            style={{
              border: "1px solid #ABB2BF",
              width: "150px",
              height: "fit-content"
            }}
          >
            <Box style={{ borderBottom: "1px solid #ABB2BF", padding: 5 }}>
              <Text style={{ color: "white", fontSize: 16 }}>Languages</Text>
            </Box>
            <Box p={5}>
              <Text style={{ color: "#ABB2BF", fontSize: 16 }}>
                {languages.join(", ")}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={20}>
            <Box
              style={{
                border: "1px solid #ABB2BF",
                width: "150px",
                height: "fit-content"
              }}
            >
              <Box style={{ borderBottom: "1px solid #ABB2BF", padding: 5 }}>
                <Text style={{ color: "white", fontSize: 16 }}>Databases</Text>
              </Box>
              <Box p={5}>
                <Text style={{ color: "#ABB2BF", fontSize: 16 }}>
                  My SQL Server basic
                </Text>
              </Box>
            </Box>{" "}
            <Box
              style={{
                border: "1px solid #ABB2BF",
                width: "150px",
                height: "fit-content"
              }}
            >
              <Box style={{ borderBottom: "1px solid #ABB2BF", padding: 5 }}>
                <Text style={{ color: "white", fontSize: 16 }}>Other</Text>
              </Box>
              <Box p={5}>
                <Text style={{ color: "#ABB2BF", fontSize: 16 }}>
                  {other.join(", ")}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={20}>
            <Box
              style={{
                border: "1px solid #ABB2BF",
                width: "150px",
                height: "fit-content"
              }}
            >
              <Box style={{ borderBottom: "1px solid #ABB2BF", padding: 5 }}>
                <Text style={{ color: "white", fontSize: 16 }}>Tools</Text>
              </Box>
              <Box p={5}>
                <Text style={{ color: "#ABB2BF", fontSize: 16 }}>
                  {tools.join(", ")}
                </Text>
              </Box>
            </Box>{" "}
            <Box
              style={{
                border: "1px solid #ABB2BF",
                width: "150px",
                height: "fit-content"
              }}
            >
              <Box style={{ borderBottom: "1px solid #ABB2BF", padding: 5 }}>
                <Text style={{ color: "white", fontSize: 16 }}>Frameworks</Text>
              </Box>
              <Box p={5}>
                <Text style={{ color: "#ABB2BF", fontSize: 16 }}>
                  {frameWorks.join(", ")}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
