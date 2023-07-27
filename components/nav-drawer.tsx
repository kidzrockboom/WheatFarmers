import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Link,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Box,
  Button,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
                href={"contact"}
              >
                CONTACT US
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
                href={"/about"}
              >
                ABOUT
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
