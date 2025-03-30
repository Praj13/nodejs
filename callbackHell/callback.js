const fs=require("fs");
fs.writeFile("file.txt","this is a new file",(err)=>{
    if(err){
        return console.error("error creating file");
    }
    console.log("file created succesfully");

    fs.readFile("file.txt","utf8",(err)=>{
        if(err){
            console.err("error reading file");
        }
        console.log("file read");
    })
    fs.appendFile("file.txt","appending in a file",(err)=>{
        if(err){
            console.err("error appending to a file")
        }
        console.log("appended");
    })
    fs.readFile("file.txt","utf8",(err,data)=>{
        if(err){
        console.err("error reading");
        }
        console.log(data);

    })
})