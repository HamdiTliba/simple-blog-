import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/navbar/Navbar";
import Footer from "@/componets/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog with Framer Motion",
  description: "Simple Blog made with Framer Motion ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
