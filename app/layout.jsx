import { Cormorant_Garamond, Manrope } from "next/font/google";
import Smooth from "@/components/Smooth";
import "./globals.css";
const co = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-cormorant" });
const ma = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const metadata = { title: "Halden Studio — Architecture & Construction", description: "Quiet, considered homes built in concrete, timber and light." };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${co.variable} ${ma.variable}`}><body><Smooth />{children}<div className="grain" /></body></html>);
}
