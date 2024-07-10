import { Inter } from "next/font/google";
import 'typeface-source-sans-pro'; // Import Source Sans 3
import "./globals.css";
import Navbar from "@/app/header/page";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the ScrollToTopButton

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSE",
  description:
    "Our expertise lies in design, fabrication and erection of high, medium and low pressure piping, boiler pressure parts - super heater coils, economizers, boiler Tubes, headers, TG sets and tanks and vessels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        {/* <ScrollToTopButton /> */}
         {/* Include the ScrollToTopButton component */}
      </body>
    </html>
  );
}
