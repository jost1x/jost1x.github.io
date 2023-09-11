import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import './style.css';
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
