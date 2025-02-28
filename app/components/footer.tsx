import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      position="absolute"
      as="footer"
      bottom={0}
      w="100vw"
      bg="gray.900"
      color="white"
      py={4}
      mt="auto"
    >
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text fontSize="sm" color={"gray.400"}>
            TYStream © {new Date().getFullYear()} 版權所有，保留所有權利。
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
