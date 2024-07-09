const EventEmitter =require("events");
class MyEmitter extends EventEmitter
{   
}
const  mt=new MyEmitter();
mt.on('full',()=>
{
    console.log("Tank is full,turn off the motor")
    setTimeout(()=>
    {
        console.log("Gentle reminder please turn off the motor ")
    },3000)
})
mt.emit('full')
console.log("Doing some other work");
