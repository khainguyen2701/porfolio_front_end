import {
  ChakraBaseProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme
} from "@chakra-ui/react";
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
