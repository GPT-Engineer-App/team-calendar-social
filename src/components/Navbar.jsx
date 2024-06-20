import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Team Calendar</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/calendar" variant={"solid"} colorScheme={"teal"} size={"sm"}>
            Calendar
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;