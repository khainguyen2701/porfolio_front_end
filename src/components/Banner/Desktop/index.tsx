import { Box, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const StyleVirtualButton = styled(Box)`
  &:active {
    background-color: #c778dd;
    border-color: "white";
  }
`;

const Desktop = () => {
  return (
    <Box
      display={"flex"}
      gap={6}
      justifyContent="space-between"
      height={"70vh"}
    >
      <Box w="100%">
        <Box
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "80px",
            alignItems: "left",
            padding: "10px"
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: 600,
              lineHeight: "42px",
              color: "white"
            }}
          >
            Elias is a{" "}
            <small
              style={{
                fontSize: 32,
                fontWeight: 600,
                lineHeight: "42px",
                color: "#C778DD"
              }}
            >
              <Typewriter
                options={{
                  strings: ["Software Engineer (Front End)"],
                  autoStart: true,
                  loop: true
                }}
              />
            </small>{" "}
            with 2+ Years of experience
          </Text>
          <Text
            style={{
              color: "#ABB2BF",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "25px"
            }}
          >
            He crafts responsive websites where technologies meet creativity
          </Text>
          <StyleVirtualButton
            as="button"
            style={{
              width: "150px",
              border: "1px solid #C778DD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 0",
              color: "white"
            }}
          >
            Contact Me !!
          </StyleVirtualButton>
        </Box>
      </Box>
      <Box w="100%" display={"flex"} justifyContent={"end"}>
        <Box
          display={"flex"}
          style={{
            position: "absolute"
          }}
        >
          <Box style={{ position: "absolute", top: 120, zIndex: 1 }}>
            <Image
              boxSize="150px"
              src="src/assets/line.png"
              alt="Image Alternatively"
            />
          </Box>
          <Box display={"flex"} style={{ position: "relative", zIndex: 2 }}>
            <Box>
              <Box>
                <Image
                  boxSize="450px"
                  src="src/assets/banner.png"
                  alt="Image Alternatively"
                  objectFit={"contain"}
                />
              </Box>{" "}
              <Box
                display={"flex"}
                style={{ border: "1px solid #ABB2BF", padding: "0px 10px" }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "42px",
                    color: "white",
                    display: "flex",
                    gap: "4px"
                  }}
                >
                  Currently working on
                  <small
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: "42px",
                      color: "#C778DD"
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: ["Portfolio"],
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </small>
                </Text>
              </Box>
            </Box>
            <Box
              style={{ position: "absolute", top: 200, right: 40, zIndex: 1 }}
            >
              <Image
                boxSize="80px"
                src="src/assets/dots.png"
                alt="Image Alternatively"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
