import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Box, Text } from "@chakra-ui/react";

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

const StyleMenuList = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: #abb2bf;
  &:hover,
  &:focus {
    color: white;
    cursor: pointer;
  }
`;
const StyledPreCharacter = styled.span`
  color: #c778dd;
`;

const headerMenu = ["home", "works", "about-me", "contacts"];
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
      <StyledBoxWrapper style={{ gap: "30px" }}>
        {headerMenu.map((h, idx) => (
          <StyleMenuList key={idx}>
            <StyledPreCharacter>#</StyledPreCharacter>
            {h}
          </StyleMenuList>
        ))}
      </StyledBoxWrapper>
    </StyleBoxHeader>
  );
};

export default Desktop;
