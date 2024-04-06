import { Box, Image, Text } from "@chakra-ui/react";
import TitleLine from "../../TitleLine";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const Desktop = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = refContainer.current;
      const sectionPosition = section?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition ?? 0 < windowHeight) {
        gsap.from(section, {
          opacity: 1,
          y: 50,
          duration: 1
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ base: 10, md: 30 }}
      mb={{ base: 10, md: 20 }}
      className="box"
      style={{ opacity: 1 }}
      ref={refContainer}
    >
      <TitleLine name="about-me" />
      <Box
        display={"flex"}
        gap={6}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
