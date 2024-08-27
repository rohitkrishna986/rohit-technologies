import Header from "@/components/additional/Header/page";
import "./globals.css";
import Footer from "@/components/additional/Footer/page";

export const metadata = {
  title: "Rohit Technologies Pvt Ltd",
  description: "A technology & media company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar-none">
        <Header />
        <div className="pt-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
