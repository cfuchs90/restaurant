import {createHome} from './home'
import {createContact} from './contact'




function createNav(linkNames){
  let linkList = document.createElement("ul");

  for(let name of linkNames) {
    let newElem = document.createElement("li");

    newElem.textContent = name;
    newElem.setAttribute("id", name);
    linkList.appendChild(newElem);
  }

  return linkList;
}


function buildContent(page) {
  let content = document.querySelector('#content');
  let img = document.createElement('img');
  let navBar = document.createElement("nav");
  let linkNames = ["Home", "Menu", "Contact"];
  let linkList = createNav(linkNames);

  img.style.width = "100%";
  img.style.height = "400px";
  img.src = "/home/christian/projects/restaurant/src/tittytwister.jpeg";

  navBar.appendChild(linkList);

  content.style.width = "80%";
  content.style.margin = "0 auto";
  content.innerHTML = "";
  content.appendChild(img);
  content.appendChild(navBar);
  content.appendChild(page);
}


let home = createHome();
buildContent(home);

let homeLink = document.querySelector('#Home');
let menuLink = document.querySelector('#Menu');
let contactLink = document.querySelector('#Contact');


homeLink.addEventListener("click", (e) => {
  let home = createHome();
  buildContent(home);
});


contactLink.addEventListener("click", (e) => {
  let contact = createContact();
  buildContent(contact);
});
