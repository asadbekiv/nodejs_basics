const http = require('http');



const server = http.createServer((req,res) =>{
    // req = server so'rov.
    // res = sever javobi


    console.log(req.url);
    res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Server</title>
      </head>
      <body>
        <h1 style="color: red; font-family: Arial;">Hello, world! This is your Node.js server .</h1>
        <h2 style="color: red; font-family: Arial;">Hello, world! This is your Node.js server with a h2 tag .</h2>
        
      </body>
    </html>
  `);

    
    



})

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



 
