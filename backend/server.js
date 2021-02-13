const express = require('express');
const app = express();
const PORT = 8080;

app.get("/getDetails",(req,res)=>{
    let positionCircle = Math.random()*101+"px";
    let positionSquare = Math.random()*101+"px";;
    let colorSquare = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let colorCircle = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    let retObj = {
        "positionCircle" : positionCircle,
        "positionSqure" : positionSquare,
        "colorCircle" : colorCircle,
        "colorSquare" : colorSquare
    }
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.send(retObj).status(200);

})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
})