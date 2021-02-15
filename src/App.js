import { useEffect, useState } from 'react';
import io from "socket.io-client";
import Circle from "./components/Circle";
import './App.css';
import Square from './components/Square';

const socket = io('http://localhost:8080')

function App() {
  let [positionCircleX, setPositionCircleX] = useState(0);
  let [positionCircleY, setPositionCircleY] = useState(0);
  let [positionSquareX, setPositionSquareX] = useState(0);
  let [positionSquareY, setPositionSquareY] = useState(0);
  let [colorCircle, setColorCircle] = useState(0);
  let [colorSquare, setColorSquare] = useState(0);

  useEffect(()=>{
      getPositions();
  },[])

  let getPositions = () => {
      socket.on("getDetails", (res) => {
        setPositionCircleX(res.positionCircleX);
        setPositionCircleY(res.positionCircleY);
        setPositionSquareX(res.positionSquareX);
        setPositionSquareY(res.positionSquareY);
        setColorCircle(res.colorCircle);
        setColorSquare(res.colorSquare);
      })
  }

  return (
    <div className="App">
      <Circle positionCircleX = {positionCircleX} positionCircleY={positionCircleY} colorCircle = {colorCircle}/>
      <Square positionSquareX = {positionSquareX} positionSquareY={positionSquareY} colorSquare = {colorSquare} />
    </div>
  );
}

export default App;
