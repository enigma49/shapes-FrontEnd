import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [positionCircle, setPositionCircle] = useState(0);
  let [positionSquare, setPositionSquare] = useState(0);
  let [colorCircle, setColorCircle] = useState(0);
  let [colorSquare, setColorSquare] = useState(0);

  useEffect(()=>{
      getPositions();
      setInterval(()=>getPositions(),1000);
  },[])

  let getPositions = () => {
      fetch("http://localhost:8080/getDetails").then((result) => {
         return result.json();
      }).then((res) => {
        setPositionCircle(res.positionCircle);
        setPositionSquare(res.positionSquare);
        setColorCircle(res.colorCircle);
        setColorSquare(res.colorSquare);
      });
  }

  return (
    <div className="App">
      <div className="circle" style={{margin: positionCircle, backgroundColor: colorCircle}}></div>
      <div className="square" style={{margin: positionSquare, backgroundColor: colorSquare}}></div>
    </div>
  );
}

export default App;
