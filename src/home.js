function createHome() {
  let box = document.createElement("div");
  // let header = document.createElement("h1");
  let copyBox = document.createElement('div');
  let copyText1 = document.createElement("p");
  let copyText2 = document.createElement("p");

  // copyBox.style.width = "500px";
  copyBox.style.display = "flex";
  copyBox.style.marginTop = "2em";

  // header.textContent = "Titty Twister";
  copyText1.textContent = "Alright, pussy, pussy, pussy! Come on in Pussy lovers! Here at the Titty Twister we’re slashing pussy in half! Give us an offer on our vast selection of pussy, this is a pussy blow out! Alright, we got white pussy, black pussy, spanish pussy, yellow pussy. We got hot pussy, cold pussy. We got wet pussy. We got smelly pussy. We got hairy pussy, bloody pussy. We got snapping pussy. We got silk pussy, velvet pussy, naugahyde pussy. We even got horse pussy, dog pussy, chicken pussy.";
  copyText2.textContent = "Come on in Pussy lovers! Here at the Titty Twister we’re slashing pussy in half! Give us an offer on our vast selection of pussy, this is a pussy blow out! Alright, we got white pussy, black pussy, spanish pussy, yellow pussy. We got hot pussy, cold pussy. We got wet pussy. We got smelly pussy. We got hairy pussy, bloody pussy. We got snapping pussy. We got silk pussy, velvet pussy, naugahyde pussy. We even got horse pussy, dog pussy, chicken pussy."

  copyText1.style.color = "white";
  copyText2.style.color = "white";
  copyBox.appendChild(copyText1);
  copyBox.appendChild(copyText2);
  // box.appendChild(header);
  box.appendChild(copyBox);

  return box;
}

export {createHome}
