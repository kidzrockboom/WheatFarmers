"use client";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import LDmode from "./lightdarkmode";

// List of links to pass to a function to auto generate
// const Links = ["HOME", "OUR PROJECTS", "CONTACT US", "ABOUT"];

// Function to pass a list of links to auto generate
// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       color: useColorModeValue("gray.800", "white"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#F8F8F6", "#1B1B1B")} px={4} py={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box px={10}></Box>

          <HStack
            as={"nav"}
            spacing={10}
            display={{ base: "none", md: "flex" }}
          >
            {/* Way to auto generate the links instead of copy pasting */}
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
            <Link
              fontWeight={"bold"}
              fontSize={14}
              px={10}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
              href={"/"}
            >
              HOME
            </Link>
            <Link
              fontWeight={"bold"}
              fontSize={14}
              px={10}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
              href={"/project"}
            >
              OUR PROJECTS
            </Link>

            <Box px={10} marginTop={1}>
              {" "}
              <h1
                style={{
                  fontSize: 34,
                  textIndent: 18,
                  letterSpacing: 10,
                  lineHeight: 1.2,
                }}
              >
                <span style={{ fontWeight: "bold" }}>WHEAT</span> <br /> FARMERS
              </h1>
            </Box>

            <Link
              fontWeight={"semibold"}
              fontSize={14}
              px={10}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
              href={"contact"}
            >
              CONTACT US
            </Link>
            <Link
              fontWeight={"semibold"}
              fontSize={14}
              px={10}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
              href={"/about"}
            >
              ABOUT
            </Link>
          </HStack>

          <LDmode></LDmode>
        </Flex>
      </Box>
    </>
  );
}
