import {createHome} from './home'

let content = document.querySelector('#content');
let home = createHome();
let para = document.createElement("p");

content.setAttribute("width", "50%");
content.setAttribute("margin-left", "4em");
console.log(home);
console.log(content);
content.appendChild(para);


content.appendChild(home);

console.log("Hello World");
