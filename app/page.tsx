"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box bg={useColorModeValue("#F8F8F6", "#1B1B1B")}>
        <h1>Home Page</h1>
        test
      </Box>
    </>
  );
}
