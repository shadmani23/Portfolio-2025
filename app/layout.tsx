import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorProvider from "@/components/cursor-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Shadmani Shaikh | Independent Designer, Director",
  description: "Portfolio of Shadmani Shaikh, Product Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CursorProvider>
            <div className="flex flex-col min-h-screen">
              <Header max-w="max-w-[90%]" />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
