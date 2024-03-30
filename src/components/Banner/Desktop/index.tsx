import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyleVirtualButton = styled(Box)`
  &:active {
    background-color: #c778dd;
    border-color: "white";
  }
`;

const Desktop = () => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} style={{ height: 423 }}>
        <GridItem w="100%" h="10" bg="blue.500" style={{ height: "100%" }}>
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
                Software Engineer (Front End)
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
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          12312
        </GridItem>
      </Grid>
    </>
  );
};

export default Desktop;
