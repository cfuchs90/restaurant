function createContact() {
  let formBox = document.createElement('div');
  let formField = document.createElement('form');
  let emailField = document.createElement('input');
  let textField = document.createElement('textarea');
  let emailLabel = document.createElement('label');
  let textLabel = document.createElement('label');


  emailLabel.htmlFor = "emailField"
  textLabel.htmlFor = "textField";
  emailField.setAttribute("id", "emailField");
  textField.setAttribute("id", "textField");
  emailField.type = "email";

  formField.appendChild(emailLabel);
  formField.appendChild(emailField);
  formField.appendChild(textLabel);
  formField.appendChild(textField);

  formBox.appendChild(formField);

  return formBox;

}


export {createContact}
