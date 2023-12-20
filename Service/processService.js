import childProcess from "child_process"; 
export class processService{
 static getAllService(callback){
    childProcess.exec('ps -l ',(err,stdout,stderr)=>{
            console.info(`stdout : ${typeof stdout}`);
            callback(stdout);
    })
 }

}