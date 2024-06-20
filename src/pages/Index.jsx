import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Team Calendar</Text>
        <Text>Manage your team's schedule efficiently.</Text>
        <Button as={Link} to="/calendar" colorScheme="teal" size="lg">
          Go to Calendar
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;