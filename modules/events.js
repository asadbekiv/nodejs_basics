 const Events = require('events');

 class Logger extends Events {
    log(a,b) {
        this.emit('claculate',a+b)
    }
 }


 const logger = new Logger();

 
 
 
 logger.on("claculate",(data)=>{
    console.log(data);
 })

 logger.log(100,901);
 logger.log(100,90);
 logger.log(100,971);
 logger.log(100,931);
 logger.log(100,911);
