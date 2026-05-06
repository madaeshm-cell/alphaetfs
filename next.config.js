export default function Home() {
  return (
    <div className="container">

      <div className="sidebar">
        <div className="logo">AlphaScanner</div>

        <div className="nav">
          <a href="#">Dashboard</a>
          <a href="#">ETFs</a>
          <a href="#">Mutual Funds</a>
          <a href="#">Analytics</a>
        </div>
      </div>

      <div className="main">

        <div className="hero">
          <h1 style={{fontSize:'48px',marginBottom:'10px'}}>
            Track ETFs Like a Pro
          </h1>

          <p style={{color:'#94a3b8'}}>
            Professional fintech dashboard inspired by AlphaScanner.
          </p>
        </div>

        <div className="grid">

          <div className="card">
            <h2>Nifty ETF</h2>
            <div className="green">+18.2%</div>
          </div>

          <div className="card">
            <h2>IT ETF</h2>
            <div className="green">+22.7%</div>
          </div>

          <div className="card">
            <h2>Gold ETF</h2>
            <div className="green">+9.8%</div>
          </div>

        </div>

      </div>

    </div>
  )
}