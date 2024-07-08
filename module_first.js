
/***common js module***/
/*
simple=require("./module_second.js");
simple();
//require() can only use if both import export file extensions are same
*/
//error->cant use import outside module,hence add type:module in package.json


/**** ES Modules****/
/*import {simple,simple2} from "./module_second.mjs"
simple();
simple2();*/

import * as a2 from "./module_second.mjs"
console.log(a2)
console.log(a2.simple())

