import {
  ChakraBaseProvider,
  Container,
  Divider,
  extendTheme
} from "@chakra-ui/react";
import HomePage from "./page";

const theme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#282c33",
        fontFamily: "'Exo 2', sans-serif",
        margin: 0,
        scrollBehavior: "smooth"
      }
    }
  },
  components: {
    Container,
    Divider
  }
};
const themes = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px"
  }
});

function App() {
  return (
    <ChakraBaseProvider theme={{ ...themes, ...theme }}>
      <HomePage />
    </ChakraBaseProvider>
  );
}

export default App;
