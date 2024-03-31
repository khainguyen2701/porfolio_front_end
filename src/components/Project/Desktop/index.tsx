import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import TitleLine from "../../TitleLine";

const projects = [
  {
    name: "Central Retail",
    stack: "HTML, CSS, JavaScript, ReactJS, Redux, MUI...",
    banner: "src/assets/centralretail-B1.jpg",
    short_des:
      "It is an ecommerce project used for customers to manage and distribute products"
  },
  {
    name: "Chan Brother Travel",
    stack: "NextJS, Typescript, Redux Toolkit Query, MUI...",
    banner: "src/assets/chanbroders-fdsg.jpg",
    short_des: "Is a tourism project of the Singapore government"
  },
  {
    name: "Amaze - CP Group",
    stack: "Typescript,ReactJS, Vite, React Query, Antd...",
    banner: "src/assets/2516-2522-03.jpg",
    short_des:
      "It is a project in the ecommerce field but on a larger scale, an e-commerce platform similar to shopee, a platform that will be connected to CP Group's system to complete a complete distribution process. correction"
  }
];

const Desktop = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={60}>
      <TitleLine name="projects" />
      <Box display={"flex"} justifyContent={"space-between"} mb={80}>
        {projects.map((p, idx) => (
          <Card style={{ border: "1px solid #ABB2BF" }} w={331} key={idx}>
            <CardHeader h={219}>
              <Image src={p.banner} bgSize={"cover"} w={"100%"} h={"100%"} />
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box
                  style={{
                    borderBottom: "1px solid #ABB2BF",
                    borderTop: "1px solid #ABB2BF",
                    padding: "5px 15px"
                  }}
                >
                  <Text
                    fontSize="sm"
                    style={{
                      color: "#ABB2BF",
                      fontWeight: 400,
                      wordWrap: "break-word"
                    }}
                  >
                    {p.stack}
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={12}
                  p={"5px 15px"}
                  w={"100%"}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "42px",
                      color: "white",
                      wordWrap: "break-word"
                    }}
                  >
                    {p.name}
                  </Text>
                  <Text
                    fontSize="sm"
                    style={{
                      color: "#ABB2BF",
                      fontWeight: 400,
                      wordWrap: "break-word"
                    }}
                  >
                    {p.short_des}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Desktop;
