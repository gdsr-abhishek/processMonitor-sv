const express = require('express')
const cp = require('child_process');
const port = 8080;

const app = express();

app.get('/ps/all',function(req,res){
  res.send("backend Works!");    
});

app.listen(port,()=>{
    console.log("I am being used yay!");
})