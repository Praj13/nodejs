const fs= require('fs');

// fs.writeFile() creates a new file or replaces content if the file exists.
fs.writeFile("example.txt","Im currently learing nodejs", (err)=>{
    if (err) throw err;
    console.log("file created");
});


// fs.appendFile() adds content without deleting existing content.
fs.appendFile("example.txt","learning file system in node js", (err)=>{
    if (err) throw err;
    console.log("file appended");
})


// fs.readFile() reads the file content.
fs.readFile("example.txt",'utf-8',(err, data)=>{
    if (err) throw err;
    console.log(data);
})

// deleting a file using fs.unlink
fs.unlink("example.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted");
})

//fs.rename() renames a file
fs.rename("example.txt","example2.txt",(err)=>{
    if(err) throw err;
    console.log("file renamed");    
})

//similiarly some of the directory methods are
fs.mkdir, fs.rmdir, fs.readdir