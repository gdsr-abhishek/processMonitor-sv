import express from "express";
import { processService } from "./Service/processService.js";
import cors from "cors";
const port = 8080;
const app = express();

app.get('/ps/all',cors(),function(req,res){
  let result=[];
  processService.getAllService((stdout)=>{
         
        result = stdout.split('\n');
        let columns =result[0].split(" ").filter((v)=>v!=="");
        result.splice(0,1)
        for(let i =0 ; i< result.length; i++){
          let temp = result[i].split(" ");
          result[i]={};
          let j=0
          temp.forEach(element => {
          if(element !=""){
           result[i][columns[j]]= element;
           j++; 
          }          
          });
            
         
        }   
        result.pop();
        res.status(200).send(result);  
      });

      });
app.use((err,req,res)=>{
  console.log(err);
  res.status(502).send("Application Error Please Contact Admina")
})

app.listen(port,()=>{
    console.log("Backend served at http://localhost:8080/");
})