import localFont from "next/font/local";
import { Outfit } from "next/font/google";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

// Load Outfit font
const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "700"], // Specify weights as needed
  subsets: ["latin"], // Choose subsets as needed
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
        >

          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
