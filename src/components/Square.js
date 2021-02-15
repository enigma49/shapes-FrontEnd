import React from "react";

function Square(props){
    let {positionSquareX, positionSquareY ,colorSquare } = props;
    
    return(
            <div className="square" style={{left: positionSquareX, top: positionSquareY, backgroundColor: colorSquare}}>
            </div>
    )
}

export default Square;