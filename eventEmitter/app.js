const MyEmitter=require('events');
const emitter=new MyEmitter();

emitter.on('greet',(name)=>{
    console.log(`hello ${name}`)
})

emitter.emit('greet');