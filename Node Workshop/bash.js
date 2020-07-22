const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const request =require("request");

process.stdout.write('prompt >');

process.stdin.on('data', data=>{
  const cmd=data.toString().trim().split(" ");
  if(cmd[0]==='pwd'){
   pwd();
   process.stdout.write("\nprompt >");
    }
  else if(cmd[0]==='ls') ls();
  else  if (cmd[0]=="cat"){
    cat(cmd[1]);
  }
  else if(cmd[0]==="curl"){
  request(cmd[1],function(error,response,body){
      console.log(body);
    });

  }

  else {
    process.stdout.write("you typed: "+cmd);

  }
})
