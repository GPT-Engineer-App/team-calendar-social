import { Box, Heading, Text, Grid, VStack } from "@chakra-ui/react";

const WeeklyView = () => {
  const daysInWeek = Array.from({ length: 7 }, (_, i) => i + 1); // Mock data for 7 days

  return (
    <Box p={4}>
      <Heading>Weekly View</Heading>
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {daysInWeek.map((day) => (
          <Box key={day} borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">Date: 2023-10-{day}</Heading>
            <Text>Events:</Text>
            <VStack align="start">
              <Text>- Event 1</Text>
              <Text>- Event 2</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default WeeklyView;