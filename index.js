import express from "express";
import { processService } from "./Service/processService.js";
const port = 8080;

const app = express();

app.get('/ps/all',function(req,res){
  let result=[]    
  processService.getAllService((stdout)=>{
         
        result = stdout.split('\n');
        for(let i =0 ; i< result.length; i++){
          let temp = result[i].split(" ");
          result[i]= [];
          temp.forEach(element => {
          if(element !=""){
           result[i].push(element);
          }          
          });
            
         
        }   
        res.status(200).send(result);  
      });

      });
app.use((err,req,res)=>{
  console.log(err);
  res.status(502).send("Application Error Please Contact Admina")
})

app.listen(port,()=>{
    console.log("I am being used yay!");
})