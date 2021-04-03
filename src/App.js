import './App.css';

function Card(props) {
  console.log(props)
  return (
<h1>{props.children}</h1>
  );
}

function App() {
  const name = "sweet"
  return (
    <div className="App">
      <Card aspd= "id">{name}</Card>
      <Card>123</Card>
      <Card>asdf{name}</Card>
      <p>em {name}</p>
    </div>
  );
}

export default App;
