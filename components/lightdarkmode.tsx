import { Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function LDmode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex alignItems={"center"}>
        <Stack direction={"row"} spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
