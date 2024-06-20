import { Box, Flex, Button, useColorModeValue, Select, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleViewChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Team Calendar</Box>
        <Flex alignItems={"center"}>
          <Select placeholder="Select user" size="sm" mr={4}>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
          </Select>
          <Select defaultValue="/calendar/monthly" size="sm" mr={4} onChange={handleViewChange}>
            <option value="/calendar/daily">Daily View</option>
            <option value="/calendar/weekly">Weekly View</option>
            <option value="/calendar/monthly">Monthly View</option>
          </Select>
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