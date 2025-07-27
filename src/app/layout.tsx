import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Balaji Wedding Planner - Royal Indian Weddings",
  description:
    "Creating magical moments and royal celebrations for over 15 years. Traditional Indian wedding planning with modern excellence.",
  keywords:
    "wedding planner, Indian weddings, traditional weddings, royal weddings, destination weddings, Mumbai wedding planner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
