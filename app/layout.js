import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Webity",
  description: "Web Design Agency",
  icons: "/webitylogo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
