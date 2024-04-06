import { Box, Image, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const StyleVirtualButton = styled(Box)`
  border-radius: 25px 5px;
  &:active {
    background-color: #c778dd;
    border-color: "white";
  }
`;
gsap.registerPlugin(ScrollTrigger);

const Desktop = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refContainerLeft = useRef<HTMLDivElement>(null);
  const refContainerRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(refContainer.current, {
      duration: 2.0,
      ease: "power1.out",
      y: 200
    });
    gsap.to(refContainerLeft.current, {
      duration: 2.0,
      ease: "power1.out",
      x: 200
    });
    gsap.to(refContainerRight.current, {
      duration: 2.0,
      ease: "power1.out",
      x: -200
    });
  }, [refContainer, refContainerLeft, refContainerRight]);

  return (
    <Box
      display={"flex"}
      gap={{ base: 2, md: 6 }}
      justifyContent="space-between"
      flexDirection={{ base: "column-reverse", md: "row" }}
      ref={refContainer}
      opacity={1}
      top={-200}
      position={"relative"}
    >
      <Box w="100%" ref={refContainerLeft} position={"relative"} left={-200}>
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
            I'm is a
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
            </small>
            with 2+ Years of experience{" "}
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
                  strings: ["on ReactJS/NextJS framework"],
                  autoStart: true,
                  loop: true
                }}
              />
            </small>
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
      <Box
        position={"relative"}
        left={200}
        ref={refContainerRight}
        w="100%"
        display={"flex"}
        justifyContent={"end"}
      >
        <Box display={"flex"}>
          <Box position={"absolute"} top={120} zIndex={1}>
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
                display={{ base: "none", md: "flex" }}
                style={{ border: "1px solid #ABB2BF", padding: "0px 10px" }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: "42px",
                    color: "white",
                    display: "flex",
                    gap: "4px"
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ["Currently, I am waiting for work from you"],
                      autoStart: true,
                      loop: true
                    }}
                  />
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
