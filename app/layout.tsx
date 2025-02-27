import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlashEdge - AI-Powered Flash Loan Arbitrage Platform",
  description:
    "FlashEdge is a cutting-edge AI-driven DeFi arbitrage platform that leverages flash loans to execute high-speed, risk-free trades across decentralized exchanges.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-4">
           {children}
        </div>
      </body>
    </html>
  )
}

