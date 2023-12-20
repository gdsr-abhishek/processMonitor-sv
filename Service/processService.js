import childProcess from "child_process"; 
export class processService{
 static getAllService(callback){
    childProcess.exec('ps -A u',(err,stdout,stderr)=>{
            console.info(`stdout : ${stdout}`);
            callback(stdout);
    })
 }

}