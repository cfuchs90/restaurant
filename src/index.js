import {createHome} from './home'
import {createContact} from './contact'

let content = document.querySelector('#content');
let navBar = document.createElement("nav");
let linkList = document.createElement("ul");
let linkNames = ["Home", "Menu", "Contact"];
let img = document.createElement('img');


let home = createHome();


for(let name of linkNames) {
  let newElem = document.createElement("li");
  newElem.textContent = name;
  newElem.setAttribute("id", name);
  linkList.appendChild(newElem);
}

let homeLink = document.querySelector('#Home');
let menuLink = document.querySelector('#Menu');
let ContactLink = document.querySelector('#Contact');


img.style.width = "100%";
img.style.height = "400px";
img.src = "/home/christian/projects/restaurant/src/tittytwister.jpeg";

// linkList.style.margin= "auto";
// navBar.style.margin= "auto";
navBar.appendChild(linkList);

content.style.width = "80%";
content.style.margin = "0 auto";
console.log(home);
console.log(content);


content.appendChild(img);
content.appendChild(navBar);
content.appendChild(home);

