import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimism AI Chatbot",
  description: "Unleash the real power of Web3 & AI with Optimism AI natively for optimism blockchain and It's Ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
