import './globals.css'

export const metadata = {
  title: 'AlphaScanner Pro',
  description: 'Professional ETF Dashboard'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}