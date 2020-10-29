function createHome() {
  let box = document.createElement("div");
  let header = document.createElement("h1");
  let img = document.createElement('img');
  let copy = document.createElement("p");

  img.src = "/home/christian/projects/restaurant/src/pollos.jpg";
  header.textContent = "Los Pollos Hermanos";
  copy.textContent = "Ene mene miste, es rappelt in der Kiste, ene mene meck und du bist weg";

  box.appendChild(header);
  box.appendChild(img);
  box.appendChild(copy);

  return box;
}

export {createHome}
