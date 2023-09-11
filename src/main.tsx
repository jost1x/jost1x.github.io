import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import './style.css';
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import theme from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <App/>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
