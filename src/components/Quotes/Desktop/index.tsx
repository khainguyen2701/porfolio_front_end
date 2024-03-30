import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyleQuotesBox = styled(Box)`
  border: 1px solid #abb2bf;
  padding: 25px 100px;
`;

const StyledWrapper = styled(Box)``;

const Desktop = () => {
  return (
    <StyledWrapper display={"flex"} justifyContent={"center"}>
      <Box>
        <StyleQuotesBox>
          <Text
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "32px",
              color: "white"
            }}
          >
            With great power comes great electricity bill
          </Text>
        </StyleQuotesBox>
        <Box style={{ width: "20%", float: "right" }}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "32px",
              color: "white",
              textAlign: "center",
              border: "1px solid #abb2bf",
              borderTop: "none",
              padding: "10px"
            }}
          >
            - MR. KHẢI
          </Text>
        </Box>
      </Box>
    </StyledWrapper>
  );
};

export default Desktop;
