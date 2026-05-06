import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding:'40px'}}>
      <h1 style={{fontSize:'42px'}}>ETF Scanner</h1>
      <p>Working deployment on Vercel.</p>

      <div style={{marginTop:'20px', display:'flex', gap:'20px'}}>
        <Link href="/etfs">ETFs</Link>
        <Link href="/mutual-funds">Mutual Funds</Link>
      </div>
    </main>
  )
}