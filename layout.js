*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:#050816;
  color:white;
  font-family:Arial, sans-serif;
}

.container{
  display:flex;
  min-height:100vh;
}

.sidebar{
  width:250px;
  background:#0b1120;
  padding:30px 20px;
  border-right:1px solid #1e293b;
}

.logo{
  font-size:28px;
  font-weight:bold;
  color:#38bdf8;
  margin-bottom:40px;
}

.nav a{
  display:block;
  color:#94a3b8;
  text-decoration:none;
  margin-bottom:18px;
  transition:0.3s;
}

.nav a:hover{
  color:#38bdf8;
}

.main{
  flex:1;
  padding:40px;
}

.hero{
  background:linear-gradient(135deg,#0f172a,#111827);
  border:1px solid #1e293b;
  border-radius:20px;
  padding:40px;
  margin-bottom:30px;
}

.hero h1{
  font-size:48px;
  margin-bottom:15px;
}

.hero p{
  color:#94a3b8;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:#0f172a;
  border:1px solid #1e293b;
  border-radius:18px;
  padding:25px;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
  border-color:#38bdf8;
}

.green{
  color:#22c55e;
  font-size:24px;
  margin-top:10px;
}

.chart{
  margin-top:40px;
  background:#0f172a;
  border:1px solid #1e293b;
  border-radius:20px;
  padding:30px;
}

.chartbox{
  margin-top:20px;
  height:300px;
  border-radius:15px;
  background:linear-gradient(180deg,#0ea5e9,#020617);
}
