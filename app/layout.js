import { ThemeProvider } from "./components/ui/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "MediMeet- Doctor Patient Consultation App",
  description: "Connect With Doctors Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        {/* header */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with Fatima Gohar</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
