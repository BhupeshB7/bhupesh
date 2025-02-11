import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";  // Import JetBrains Mono
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",  // Variable for JetBrains Mono
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: "Bhupesh - Portfolio",
  description:
    "Bhupesh kumar - Full Stack Developer specializing in web development and software engineering",
  openGraph: {
    type: "website",
    siteName: "Bhupesh - Portfolio",
    url: "https://bhupeshb7.vercel.app",
    images:"https://ik.imagekit.io/bhupeshb7/img_CiOKjIdaPH.jpg?updatedAt=1732775938887",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BhupeshB7",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ Async External Scripts */}
        <script async src="https://analytics.example.com/script.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} antialiased`}  // Add JetBrains Mono variable
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
