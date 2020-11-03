function createContact() {
  let formBox = document.createElement('div');
  let formField = document.createElement('form');
  let emailField = document.createElement('input');
  let textField = document.createElement('textarea');
  let emailLabel = document.createElement('label');
  let textLabel = document.createElement('label');
  let nameField = document.createElement('input');
  let nameLabel = document.createElement('label');

  let list = document.createElement("ul");
  let nameElement = document.createElement("li");
  let emailElement = document.createElement("li");
  let textElement = document.createElement("li");

  list.style.listStyle = "none";

  emailField.setAttribute("id", "emailField");
  emailField.type = "email";

  textField.setAttribute("id", "textField");
  textField.rows = "10";
  textField.cols = "50";
  textField.style.resize = "none";
  textField.style.verticalAlign = "top";

  nameField.setAttribute("id", "nameField");
  nameField.type = "input";

  nameLabel.htmlFor = "nameField"
  nameLabel.textContent = "Name:"
  nameLabel.style.color = "#ffffff"

  emailLabel.htmlFor = "emailField"
  emailLabel.textContent = "Email:"
  emailLabel.style.color = "#ffffff"

  textLabel.htmlFor = "textField";
  textLabel.textContent = "Message";
  textLabel.style.color = "#ffffff"

  nameElement.appendChild(nameLabel);
  nameElement.appendChild(nameField);
  emailElement.appendChild(emailLabel);
  emailElement.appendChild(emailField);
  textElement.appendChild(textLabel);
  textElement.appendChild(textField);

  nameField.style.marginLeft = "2em";
  emailField.style.marginLeft = "2em";
  textField.style.marginLeft = "1.2em";

  list.appendChild(nameElement);
  list.appendChild(emailElement);
  list.appendChild(textElement);

  formField.appendChild(list);

  formBox.appendChild(formField);

  return formBox;

}


export {createContact}
