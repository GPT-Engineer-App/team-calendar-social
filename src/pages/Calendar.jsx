import { Box, Heading, Text, Button, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Calendar = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex>
      <Box flex="1" p={4}>
        <VStack spacing={4}>
          <Heading>Team Calendar</Heading>
          <Text>View and manage your team's events.</Text>
          {/* Main area with calendar day cards */}
          <Box>
            {/* Example of a calendar day card */}
            <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
              <Heading size="md">Date: 2023-10-01</Heading>
              <Text>Weekday: Monday</Text>
              <Text>Events:</Text>
              <VStack align="start">
                <Text>- Event 1</Text>
                <Text>- Event 2</Text>
              </VStack>
            </Box>
            {/* Add more calendar day cards as needed */}
          </Box>
        </VStack>
      </Box>
      <Box w="250px" p={4} bg={bgColor}>
        <VStack spacing={4}>
          <Button as={Link} to="/calendar/monthly" colorScheme="teal" size="md">
            Monthly View
          </Button>
          <Button as={Link} to="/calendar/weekly" colorScheme="teal" size="md">
            Weekly View
          </Button>
          <Button as={Link} to="/calendar/daily" colorScheme="teal" size="md">
            Daily View
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Calendar;