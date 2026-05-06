*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:#050816;
  color:white;
  font-family:Arial,sans-serif;
}

.dashboard{
  display:flex;
  min-height:100vh;
}

.sidebar{
  width:260px;
  background:#0b1120;
  border-right:1px solid #1e293b;
  padding:30px 20px;
}

.logo{
  font-size:30px;
  font-weight:bold;
  color:#38bdf8;
  margin-bottom:40px;
}

.nav a{
  display:block;
  color:#94a3b8;
  text-decoration:none;
  margin-bottom:20px;
  transition:.3s;
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
  border-radius:24px;
  padding:50px;
  margin-bottom:30px;
}

.hero h1{
  font-size:52px;
  margin-bottom:15px;
}

.hero p{
  color:#94a3b8;
  font-size:18px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:#0f172a;
  border:1px solid #1e293b;
  border-radius:20px;
  padding:25px;
  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);
  border-color:#38bdf8;
}

.card h2{
  margin-bottom:15px;
}

.green{
  color:#22c55e;
  font-size:28px;
  font-weight:bold;
}

.chart{
  margin-top:40px;
  background:#0f172a;
  border:1px solid #1e293b;
  border-radius:24px;
  padding:30px;
}

.chartbox{
  height:320px;
  border-radius:18px;
  background:linear-gradient(180deg,#0ea5e9,#020617);
  margin-top:20px;
}

.table{
  margin-top:40px;
  background:#0f172a;
  border:1px solid #1e293b;
  border-radius:24px;
  padding:30px;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,td{
  padding:16px;
  border-bottom:1px solid #1e293b;
  text-align:left;
}

th{
  color:#38bdf8;
}