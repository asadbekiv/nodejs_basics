 const fs = require('fs');
 const path = require('path');

//  fs.mkdir(path.join(__dirname,'templates'),err =>{
//     if (err) throw new Error()
//     console.log('Folder was created Successfully ');
//  })


// fs.mkdir(path.join(__dirname,'notes'),err =>{
//     console.log(err);

//     if(err) throw new Error()

//     console.log('File was created Successfully !');
// }

// );

 fs.writeFile(path.join(__dirname,'notes','input.txt'), 'Created new course NodeJS',err =>{

    if (err) throw new Error()

    console.log('File was written Successfully !.🗃️');



    fs.appendFile(path.join(__dirname,'notes','input.txt'), 'and microservice project ',err =>{
        if (err) throw new Error()

        console.log('File was changed successfully ');
    })

    fs.readFile(path.join(__dirname,'notes','input.txt'),'utf-8', (err,data)=>{
       if(err) throw new Error()
   
       console.log(data);
    })
 });







 console.log(path.join('folder0','folder1','folder2','folder3'));

