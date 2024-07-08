/*Asynchronous 
Single thread handle multiple connectionsn 
Runtime envoirnment

***nodemon->
tool used for application developement using node js
No need to restart any change then automaticallt execute no neew to type 
node inde.js again and again
npm install -g nodemon  

**npm->
node package Manager
word's largest software library
around 8,00,000 packages

**devdependencies -> 
only using this at time of developementn

**package-lock.json -> 
-automatic generated
-locks down specific version of installed package ,preventing unintended 
updates
-contains details record of dependency tree 
eg -if dependencies are express and angular cli then may also need
other dependencies

**package.json
contains metadata about project and dependencies
*/
const Nikita=require("./second.js");
// ./ is cwd 
console.log("hellof",Nikita);