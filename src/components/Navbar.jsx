import { Box, Flex, Button, useColorModeValue, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Team Calendar</Box>
        <Flex alignItems={"center"}>
          <Input placeholder="Search events" size="sm" mr={4} />
          <Text mr={4}>Team Name</Text>
          <Flex alignItems={"center"} mr={4}>
            <FaUserCircle size="24px" />
            <Text ml={2}>User Name</Text>
          </Flex>
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