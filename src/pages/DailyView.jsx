import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const DailyView = () => {
  return (
    <Box p={4}>
      <Heading>Daily View</Heading>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading size="md">Date: 2023-10-01</Heading>
        <Text>Events:</Text>
        <VStack align="start">
          <Text>- Event 1</Text>
          <Text>- Event 2</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default DailyView;