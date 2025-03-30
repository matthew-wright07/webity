import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";

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
      </body>
    </html>
  );
}
