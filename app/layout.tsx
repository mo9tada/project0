import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "My App",
  description: "Responsive Next.js App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
