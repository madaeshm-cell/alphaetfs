import './globals.css'

export const metadata = {
  title: 'ETF Scanner',
  description: 'ETF Scanner App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}