import Navbar from "./components/Navigation/Navbar";
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Index } from "./content/Index";
import { Projects } from "./content/Projects";
import { Contact } from "./content/Contact";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Container maxW="container.lg" color={"white"}>
        <Navbar />
      </Container>
      <Container maxW="container.md" color={"white"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </>
  );
}
