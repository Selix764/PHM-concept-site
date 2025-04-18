import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export const metadata = {
  title: "Perfect Home Media - We Brand Your Lifestyle",
  description:
    "Perfect Home Media oferă soluții creative pentru susținerea succesului afacerii tale în producția de media și lifestyle.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="min-h-screen pt-16">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
