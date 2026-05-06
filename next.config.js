export default function Home() {
  return (
    <div className="container">

      <div className="sidebar">
        <div className="logo">AlphaScanner</div>

        <div className="nav">
          <a href="#">Dashboard</a>
          <a href="#">ETFs</a>
          <a href="#">Mutual Funds</a>
          <a href="#">Top Gainers</a>
          <a href="#">Analytics</a>
          <a href="#">Market Trends</a>
        </div>
      </div>

      <div className="main">

        <div className="hero">
          <h1>Track ETFs Like a Pro</h1>
          <p>
            Professional ETF analytics dashboard inspired by modern fintech platforms.
          </p>
        </div>

        <div className="grid">

          <div className="card">
            <h2>Nifty ETF</h2>
            <div className="green">+18.2%</div>
          </div>

          <div className="card">
            <h2>Bank ETF</h2>
            <div className="green">+12.4%</div>
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

        <div className="chart">
          <h2>Market Trend</h2>
          <div className="chartbox"></div>
        </div>

      </div>

    </div>
  )
}