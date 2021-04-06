import './App.css';
import Card from './components/Card'
import React from 'react'

function App() {
  console.log("app is running")
  const name = "sweet"
  const id = ["1", "2", "6"]

  var statestuff = React.useState(0)
  var val = statestuff[0]
  var set = statestuff[1]
  console.log(val)
  return (
    <div className="App">
      <Card aspd="id">{name}</Card>
      <Card>123</Card>
      <Card>asdf{name}</Card>
      <p>em {name}</p>
      <ul>
        {id.map(item => <li>{item}</li>)}
      </ul>
      <p>{val}</p>
      <button onClick={() => {
        set(val+1)
      }} >click</button>
    </div>
  );
}


export default App;
