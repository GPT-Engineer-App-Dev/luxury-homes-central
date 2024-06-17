import { Container, Text, VStack, Box, Heading, Image, Button, Flex, Link } from "@chakra-ui/react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Luxury Houses</Heading>
          <Text fontSize="lg">Discover your dream home with us</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1560185127-6a8c6f3e8e2b" alt="Luxury House" borderRadius="md" />
        <Text fontSize="sm" color="gray.500">Photo by <Link href="https://unsplash.com/@username" isExternal>Photographer Name</Link> on Unsplash</Text>
        <Box textAlign="center">
          <Button colorScheme="teal" size="lg" mt={4}>Explore Now</Button>
        </Box>
        <Flex justifyContent="space-around" width="100%" mt={8}>
          <Box textAlign="center">
            <FaHome size="2em" />
            <Text mt={2}>Beautiful Locations</Text>
          </Box>
          <Box textAlign="center">
            <FaPhone size="2em" />
            <Text mt={2}>24/7 Support</Text>
          </Box>
          <Box textAlign="center">
            <FaEnvelope size="2em" />
            <Text mt={2}>Contact Us</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;