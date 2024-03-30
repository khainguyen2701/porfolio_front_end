import { ChakraBaseProvider, Container, Divider } from "@chakra-ui/react";
import HomePage from "./page";

const theme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#282c33",
        fontFamily: "'Exo 2', sans-serif",
        margin: 0
      }
    }
  },
  components: {
    Container,
    Divider
  }
};

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <HomePage />
    </ChakraBaseProvider>
  );
}

export default App;
