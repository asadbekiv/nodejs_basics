const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req,res) =>{
  
  // GEt section
  if(req.method === 'GET'){
    res.writeHead(200,{'Content-Type':'text/html'})


    if(req.url === '/'){

      fs.readFile(path.join(__dirname,'templates','index.html'),'utf-8',(err,data) =>{
        if(err) throw err
        res.end(data)
      })
      

    }else if (req.url === '/about'){


      fs.readFile(path.join(__dirname,'templates','about.html'),'utf-8',(err,data) =>{
        if(err) throw err
        res.end(data)
      })



    }else if(req.url === '/contact'){

      fs.readFile(path.join(__dirname,'templates','contact.html'),'utf-8',(err,data) =>{
        if(err) throw err
        res.end(data)
      })

    }
    



  // POST section
  }else if(req.method === 'POST'){
    
    const body = [];
    res.writeHead(200,{'Content-Type':'text/html charset=utf-8'})
    
    req.on('data',data =>{
      body.push(Buffer.from(data))
    })

    req.on('end',() =>{

      const message = body.toString().split('=')[1]
      // console.log(body.toString( ));
      res.end(`Name successfully added : ${message}`)
    })
  }
  


    console.log(req.url);
    
    
    



});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is listening on poart : 8000');
})










// const userData = require('./user');
// const carData = require('./car');


// console.log(userData.user);
// userData.userLogger();
// console.log(carData.car);
// carData.carLogger(); 

// (function(require,modeule,exports,__dirname,__filename){
// const userData = require('./user');
// const carData = require('./car');


// console.log(userData.user);
// userData.userLogger();
// console.log(carData.car);
// carData.carLogger(); 
    

// })();



 
