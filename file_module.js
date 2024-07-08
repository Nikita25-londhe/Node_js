const fs=require("fs");
//utf->Unicode Transformation Format-8)
console.log(fs.readFileSync("file.txt").toString());
/*fs.writeFile("file.txt","This is File",()=>
{
    console.log("Written to file")
});*/

console.log(fs.writeFileSync("file.txt","This is data3"))

console.log("finished reading file")
//Non-Blocking Model
