import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Webity",
  description: "Web Design Agency",
  icons: "/webifylogo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
