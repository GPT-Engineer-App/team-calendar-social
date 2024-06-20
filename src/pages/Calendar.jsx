import { Box, Heading, Text, VStack, Flex, useColorModeValue } from "@chakra-ui/react";

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
      
    </Flex>
  );
};

export default Calendar;