import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Box,
  Button,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

export function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={10}>
        <IconButton
          size={"lg"}
          variant={"ghost"}
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          aria-label="Open Menu"
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Wheat Farmers</DrawerHeader>

          <DrawerBody>
            <VStack as={"nav"} spacing={10} justifyContent={"space-between"}>
              <Heading
                fontWeight={"bold"}
                fontSize={14}
                px={10}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                <Link href={"/"}>HOME</Link>
              </Heading>
              <Heading
                fontWeight={"bold"}
                fontSize={14}
                px={10}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                <Link href={"/project"}>OUR PROJECTS</Link>
              </Heading>

              <Heading
                fontWeight={"semibold"}
                fontSize={14}
                px={10}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                <Link href={"#contact"}>CONTACT US</Link>
              </Heading>
              <Heading
                fontWeight={"semibold"}
                fontSize={14}
                px={10}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                <Link href={"/about"}>ABOUT</Link>
              </Heading>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
