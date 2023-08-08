"use client";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useColorModeValue,
  VStack,
  Container,
  Button
} from "@chakra-ui/react";
import LDmode from "./lightdarkmode";
import { cp } from "fs";


export default function blackButton() {

  const button = {
    flexShrink: 0,
    background: "#000",
    color: "#FFF",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px" /* 160% */
  }

  const buttonText = {

  }



  return (
    <>
        <Button style={button} height={{base: '60px', md: '72px'}} width={{base: '144px', md: '208px'}}>
          Lorem Ipsum
        </Button>
    </>
  );
}
