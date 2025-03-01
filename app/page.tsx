import { Box, Flex, Text, Button, Link, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./components/footer";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    fontSize="lg"
    px="8"
    py="3"
    rounded="lg"
    bg="transparent"
    transition="all 0.3s ease"
    _hover={{
      transform: "scale(1.1)",
      boxShadow: "lg",
    }}
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <Box position="absolute" w="100vw" minH="100vh" overflowX="hidden">
      {/* ✅ 背景圖片放在最底層 (zIndex -1) */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        minW={"full"}
        h="100vh"
        bgImage="url('/image.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        zIndex="0"
        filter={"opacity(0.5)"}
      />

      <Flex
        as="nav"
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        p="4"
        justify="space-between"
        align="center"
        backdropFilter="blur(10px)"
        zIndex="1000"
      >
        {/* 添加 maxW 讓內容內縮 */}
        <Flex
          w="100%"
          maxW="1200px"
          mx="auto"
          justify="space-between"
          align="center"
        >
          <Text fontSize="3xl" fontWeight="bold">
            <Text as="span" color="purple.500">
              T
            </Text>
            <Text as="span" color="red.500">
              Y
            </Text>
            Stream
          </Text>

          <HStack gap="4">
            <NavLink key="服務條款" href="/tos">
              服務條款
            </NavLink>
            <NavLink key="隱私條款" href="/privacy">
              隱私條款
            </NavLink>
          </HStack>
        </Flex>
      </Flex>

      {/* ✅ 確保內容層 zIndex 為 1，確保它在背景上方 */}
      <Flex
        position="relative"
        flexDir="column"
        justify="center"
        align="center"
        h="100vh"
        px="10"
        maxW="1200px"
        mx="auto"
        zIndex="1"
      >
        <Text fontSize="5xl" fontWeight="bold" color="white">
          <Text as="span" color="purple.700">
            T
          </Text>
          <Text as="span" color="red.700">
            Y
          </Text>
          Stream
        </Text>
        <Text mt="4" fontSize="lg" color="gray.200" textAlign="center">
          一台全中文的 Discord 機器人，專為即時的 Twitch & YouTube
          直播通知而設計，讓你的社群不再錯過任何精彩直播！
        </Text>
        <HStack mt="6" gap="4">
          <Button
            asChild
            rel="noopener noreferrer"
            background="linear-gradient(to right, red, purple)"
            px="6"
            py="3"
            rounded="lg"
            fontWeight="semibold"
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              background: "linear-gradient(to right, red, purple)",
              transform: "scale(1.05)",
            }}
          >
            <a href="https://discord.com/oauth2/authorize?client_id=1267467138839613553">
              邀請 →
            </a>
          </Button>

          <Button
            asChild
            bg="#5865F2"
            color="black"
            px="6"
            py="3"
            rounded="lg"
            fontWeight="semibold"
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          >
            <a href="https://discord.gg/KeXM5dmqK2">支援群組</a>
          </Button>
        </HStack>
      </Flex>
      <Footer />
    </Box>
  );
}
