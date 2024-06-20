import { Container, Text, VStack, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Team Calendar</Text>
        <Text>Manage your team's schedule efficiently.</Text>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="teal" size="lg">
          Login
        </Button>
        <Button as={Link} to="/register" colorScheme="teal" size="lg">
          Register
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;