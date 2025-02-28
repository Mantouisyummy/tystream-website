import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  Separator,
} from "@chakra-ui/react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Last Updated: <strong>2025/02/28</strong>
          </Text>
          <Separator />

          {/* 1. Introduction */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              1. Introduction
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              Welcome to <strong>TYStream</strong>, a Discord bot designed to
              provide **live streaming notifications** and enhance server
              engagement. Your privacy is important to us, and this Privacy
              Policy outlines how we collect, use, and protect your data.
            </Text>
          </Box>

          {/* 2. Data We Collect */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              2. Data We Collect
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              TYStream collects minimal data necessary to function properly.
              This includes:
            </Text>
            <Box as="ul" pl={5} color="gray.700">
              <Box as="li" color="gray.400">
                <Text as="span" fontWeight="bold" color="gray.300">
                  User IDs & Server IDs:
                </Text>{" "}
                Used to store bot settings and preferences.
              </Box>
              <Box as="li" color="gray.400">
                <Text as="span" fontWeight="bold" color="gray.300">
                  Channel IDs:
                </Text>{" "}
                Where live streaming notifications should be sent.
              </Box>
              <Box as="li" color="gray.400">
                <Text as="span" fontWeight="bold" color="gray.300">
                  Streaming Data:
                </Text>{" "}
                Fetching live streaming events from supported platforms.
              </Box>
              <Box as="li" color="gray.400">
                <Text as="span" fontWeight="bold" color="gray.300">
                  Basic Usage Statistics:
                </Text>{" "}
                Helps us improve the bot’s performance.
              </Box>
            </Box>
          </Box>

          {/* 3. How We Use Your Data */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              3. How We Use Your Data
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              We only use your data for the following purposes:
            </Text>
            <Box as="ul" pl={5} color="gray.700">
              <Box as="li" color="gray.400">
                <Text as="span" fontWeight="bold" color="gray.300">
                  Delivering real-time streaming notifications
                </Text>{" "}
                to your Discord server.
              </Box>
              <Box as="li" color="gray.400">
                Customizing bot settings based on your preferences.
              </Box>
              <Box as="li" color="gray.400">
                Ensuring TYStream operates efficiently with minimal downtime.
              </Box>
              <Box as="li" color="gray.400">
                Protecting the bot from abuse, spam, or malicious use.
              </Box>
            </Box>
          </Box>

          {/* 4. Data Sharing & Third-Party Services */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              4. Data Sharing & Third-Party Services
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              TYStream{" "}
              <Text as="span" fontWeight="bold" color="gray.300">
                does not
              </Text>{" "}
              share, sell, or distribute your personal data to third parties.
              However, the bot may interact with external services such as:
            </Text>

            <Box as="ul" pl={5} color="gray.400">
              <Box as="li">
                <Text as="span" fontWeight="bold" color="gray.300">
                  YouTube, Twitch, or other streaming platforms:
                </Text>{" "}
                To fetch live streaming updates.
              </Box>
              <Box as="li">
                <Text as="span" fontWeight="bold" color="gray.300">
                  Discord API:
                </Text>{" "}
                To provide bot functionality within Discord.
              </Box>
            </Box>
          </Box>

          {/* 5. Data Storage & Security */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              5. Data Storage & Security
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              We take security seriously and implement necessary measures to
              protect your data. However, since no system is 100% secure, we
              <Text as="span" fontWeight="bold" color="gray.300">
                {" "}
                recommend avoiding sensitive information{" "}
              </Text>
              in bot interactions.
            </Text>
          </Box>

          {/* 6. User Rights & Data Removal */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              6. User Rights & Data Removal
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              You have the right to:
            </Text>
            <Box as="ul" pl={5} color="gray.400">
              <li>Request the removal of your data by contacting us.</li>
              <li>
                Revoke TYStream’s permissions from your Discord server at any
                time.
              </li>
            </Box>
          </Box>

          {/* 7. Policy Updates */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              7. Policy Updates
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              We reserve the right to update this Privacy Policy. Any changes
              will be reflected on this page, and continued use of TYStream
              means acceptance of the updated policy.
            </Text>
          </Box>

          {/* 8. Contact Information */}
          <Box>
            <Heading as="h2" size="lg" mt={6} color="blue.500">
              8. Contact Information
            </Heading>
            <Text color="gray.400" lineHeight="1.7">
              If you have any concerns or requests regarding this Privacy
              Policy, please contact us at{" "}
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
