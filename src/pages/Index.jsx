import { Box, Text, Image, Button } from '@chakra-ui/react';
import { FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src="/images/band-stage.jpg" alt="Live Concert" boxSize="100%" />
      <Text fontSize="5xl" fontWeight="bold" mt={5}>Catch Us Live!</Text>
      <Text fontSize="2xl" mt={3}>Join us on our unforgettable tour across the globe.</Text>
      <Button rightIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" size="lg" mt={5}>
        Get Tickets Now
      </Button>
    </Box>
  );
};

export default Index;