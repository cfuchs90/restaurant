function createMenuItem(food, desc) {
  let item = document.createElement("div");
  let header = document.createElement("h4");
  let description = document.createElement("p");

  header.style.fontSize = "2em";
  header.style.color = "#ffffff";
  description.style.color = "#ffffff";

  header.textContent = food;
  description.textContent = desc;

  item.appendChild(header);
  item.appendChild(description);

  return item;
}


function createMenu() {
  let menuContainer = document.createElement("div");
  let firstItem = createMenuItem("White pussy", "European Standard");
  let secondItem = createMenuItem("Black pussy", "African Standard");
  let thirdItem = createMenuItem("Spanish pussy", "European/Latin American Standard");
  let fourthItem = createMenuItem("Hot pussy", "The ones you want");
  let fifthItem = createMenuItem("Cold pussy", "The ones you want to avoid");
  let sixthItem = createMenuItem("Hairy pussy", "Well to each his own");

  menuContainer.appendChild(firstItem);
  menuContainer.appendChild(secondItem);
  menuContainer.appendChild(thirdItem);
  menuContainer.appendChild(fourthItem);
  menuContainer.appendChild(fifthItem);
  menuContainer.appendChild(sixthItem);
  // menuContainer.appendChild(seventhItem);

  return menuContainer;
}


export {createMenu}
