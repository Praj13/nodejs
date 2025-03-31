const MyEmitter=require('events');
const emitter=new MyEmitter();

emitter.on('greet',()=>{
    console.log("event emitter in node js")
})

emitter.emit('greet');