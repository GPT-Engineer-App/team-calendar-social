import { Box, Heading, Text, Grid, VStack } from "@chakra-ui/react";

const MonthlyView = () => {
  const daysInMonth = Array.from({ length: 35 }, (_, i) => i + 1); // Mock data for 35 days

  return (
    <Box p={4}>
      <Heading>Monthly View</Heading>
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {daysInMonth.map((day) => (
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

export default MonthlyView;