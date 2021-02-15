import React from "react";

function Circle(props){
    let {positionCircleX, positionCircleY , colorCircle } = props;
    
    return(
            <div className="circle" style={{left: positionCircleX, top: positionCircleY, backgroundColor: colorCircle}}></div>
    )
}

export default Circle;