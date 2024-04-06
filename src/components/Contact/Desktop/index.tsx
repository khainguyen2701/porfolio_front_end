import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import TitleLine from "../../TitleLine";

const StyleBoxContacts = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Desktop = () => {
  const handleClickFB = () => {
    window.open("https://www.facebook.com/nguyenvankhai270100/", "_blank");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ base: 10, md: 20 }}
      mb={{ base: 10, md: 20 }}
      className="box"
    >
      <TitleLine name="contacts" />
      <Box
        display={"flex"}
        gap={6}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "26px",
              color: "#ABB2BF"
            }}
          >
            I’m interested in opportunities to work in the office or remotely.
            However, if you have other request or question, don’t hesitate to
            contact me
          </Text>
        </Box>
        <Box
          w="100%"
          display={"flex"}
          justifyContent={{ base: "center", md: "end" }}
        >
          <Box
            display={"flex"}
            w={{ base: "95%", md: "100%" }}
            flexDirection={"column"}
            justifyContent={"center"}
            style={{ border: "1px solid #ABB2BF" }}
          >
            <Box p={{ base: 5, md: 10 }}>
              <Text
                color={"white"}
                fontSize={16}
                fontWeight={600}
                textAlign={"center"}
              >
                Message me here
              </Text>
            </Box>
            <Box p={{ base: 5, md: 10 }}>
              <StyleBoxContacts onClick={handleClickFB}>
                <InfoIcon style={{ color: "#ABB2BF" }} />
                <Text style={{ color: "#ABB2BF" }}>Khải Nguyễn</Text>
              </StyleBoxContacts>
              <StyleBoxContacts>
                <EmailIcon style={{ color: "#ABB2BF" }} />
                <Text style={{ color: "#ABB2BF" }} wordBreak={"break-word"}>
                  nguyenvankhai2701@gmail.com
                </Text>
              </StyleBoxContacts>
              <StyleBoxContacts
                onClick={() => window.open("tel:0877702701", "_system")}
              >
                <PhoneIcon style={{ color: "#ABB2BF" }} />
                <Text style={{ color: "#ABB2BF" }}>0877702701</Text>
              </StyleBoxContacts>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
