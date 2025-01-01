import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer'; 
import Head from "next/head"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kara Ferderic",
  description: "Make-up Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-full overflow-hidden"> {/* Prevent overflow */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}