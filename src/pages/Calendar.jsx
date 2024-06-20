import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Team Calendar</Heading>
        <Text>View and manage your team's events.</Text>
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
  );
};

export default Calendar;