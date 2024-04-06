import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const StyleBoxHeader = styled(Box)`
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledTextLogo = styled(Text)`
  font-weight: 700;
  color: white;
`;
const StyledBoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Desktop = () => {
  return (
    <StyleBoxHeader>
      <StyledBoxWrapper>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "40px"
          }}
        />
        <StyledTextLogo>Portfolio</StyledTextLogo>
      </StyledBoxWrapper>
    </StyleBoxHeader>
  );
};

export default Desktop;
