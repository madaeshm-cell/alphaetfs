async function getData() {
  const res = await fetch('https://dummyjson.com/products?limit=3', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function ETFsPage() {
  const data = await getData()

  return (
    <div style={{padding:'40px'}}>
      <h1 style={{fontSize:'32px'}}>Top ETFs</h1>

      {data.products.map((item) => (
        <div key={item.id} style={{border:'1px solid #334155', padding:'20px', marginTop:'20px'}}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}