"use client";

import Navbar from "@/components/navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Project from "../components/Project";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Box bg={useColorModeValue("#F8F8F6", "#1B1B1B")}>
        <Navbar></Navbar>
        <h1>Home Page</h1>
        test
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </Box>
    </>
  );
}
