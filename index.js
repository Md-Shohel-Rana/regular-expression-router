const express = require("express");
const app = express();



app.get("/products/:id([0-9]{3})", (req,res)=>{

    res.send(`<h2> ID = ${req.params.id}</h2>`);
});
app.get("/products/:title([a-zA-Z]+)",(req,res)=>{

    res.send(`<h2>Title is = ${req.params.title}</h2>`)
});
//wild card
app.use("*", (req,res)=>{

    res.status(404).send({
        message: "not a valid product",
    });
});



app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});