import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ // Inter as a font size.
  subsets:['latin'] // specifies that only the Latin character set should be loaded,
})

export const metadata: Metadata = {
  title: "Ahmed Al Darabee | Web Developer",
  description: "Discover the portfolio of Ahmed Al Darabee, a skilled web developer specializing in JavaScript, React.js, HTML, CSS, and Bootstrap.",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
})

{
  return (
    <html lang="en">
      {/** inter.className, used to access this font type */}
      <body className={`${inter.className} cursor-pointer min-h-screen bg-slate-900 text-slate-400 text-lg `}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
