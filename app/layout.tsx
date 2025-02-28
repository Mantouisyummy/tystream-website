import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
