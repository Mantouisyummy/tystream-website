import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  Separator,
} from "@chakra-ui/react";

export default function TermsOfService() {
  return (
    <Box bg="blackAlpha.400" minH="100vh" py={10}>
      <Container
        maxW="container.md"
        bg="whiteAlpha.200"
        boxShadow="lg"
        borderRadius="md"
        p={8}
      >
        <VStack gap={6} align="start">
          <Heading as="h1" size="xl" color="blue.600">
            Terms of Service
          </Heading>
          <Text fontSize="sm" color="gray.400">
            Last Updated: <strong>2025/02/28</strong>
          </Text>
          <Separator />

          {/* 1. Acceptance of Terms */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              1. Acceptance of Terms
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              By using <strong>TYStream</strong>, you acknowledge that you have
              read, understood, and agreed to these Terms. If you do not agree,
              please refrain from using the Service.
            </Text>
          </Box>

          {/* 2. Description of Service */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              2. Description of Service
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              <strong>TYStream</strong> is a Discord bot designed to enhance
              server management, provide streaming notifications, and automate
              various tasks on Discord.
            </Text>
          </Box>

          {/* 3. User Responsibilities */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              3. User Responsibilities
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              By using TYStream, you agree to:
            </Text>
            <Box as="ul" pl={5} color="gray.400">
              <li>
                Follow Discord's{" "}
                <Link href="https://discord.com/terms" color="blue.500">
                  Terms of Service
                </Link>
                .
              </li>
              <li>
                Use the Service lawfully and not engage in abusive behavior.
              </li>
              <li>Not exploit or abuse any vulnerabilities within TYStream.</li>
              <li>
                Not attempt to reverse-engineer, modify, or redistribute the bot
                without permission.
              </li>
            </Box>
          </Box>

          {/* 4. Data Collection & Privacy */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              4. Data Collection & Privacy
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              TYStream may collect and store certain data to function properly.
              We respect your privacy and will not sell your information to
              third parties. Please refer to our Privacy Policy for more
              details.
            </Text>
          </Box>

          {/* 5. Service Availability */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              5. Service Availability
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              We do not guarantee uninterrupted or error-free operation of
              TYStream. We reserve the right to modify, suspend, or discontinue
              the Service at any time without prior notice.
            </Text>
          </Box>

          {/* 6. Limitation of Liability */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              6. Limitation of Liability
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              To the fullest extent permitted by law, TYStream, its developers,
              and affiliates are not liable for any direct, indirect,
              incidental, special, or consequential damages arising from the use
              or inability to use the Service.
            </Text>
          </Box>

          {/* 7. Modifications to Terms */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              7. Modifications to Terms
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page, and continued use of the Service
              after changes constitute acceptance of the updated Terms.
            </Text>
          </Box>

          {/* 8. Contact Information */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              8. Contact Information
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              If you have any questions or concerns about these Terms, contact
              us at{" "}
              <Link href="mailto:me@mantou.dev" color="blue.500">
                me@mantou.dev
              </Link>
              .
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
