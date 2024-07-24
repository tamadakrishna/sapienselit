import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sapienselit",
  description: "Educational Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
        </header>
        {children}
      </body>
    </html>
  );
}
