import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "TYStream",
  description:
    "一台全中文的 Discord 機器人，專為即時的 Twitch & YouTube 直播通知而設計，讓你的社群不再錯過任何精彩直播！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children} <Footer />
        </Provider>
      </body>
    </html>
  );
}
