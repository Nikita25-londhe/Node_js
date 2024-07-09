/*URL->Uniform Resource Locator */
import url from 'url'
const myUrl=new URL("https://example.org")
myUrl.port=8000;
myUrl.username="Nikita"
myUrl.hash="#1223"
//hypertext transfer protocol secure
console.log(myUrl)
console.log(myUrl.href)