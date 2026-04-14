let firstName = 'Jane';
let surname = 'Jacobs';
let isEdit= false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEdit);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleSurnameChange(e) {
  setSurname(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setSurname(value) {
  surname = value;
  updateDOM();
}

function setIsEditing(value) {
  isEdit = value;
  updateDOM();
}

function updateDOM() {
  if (isEdit) {
    editButton.textContent = 'Save';
    hide(firstNameText);
    hide(surnameText);
    show(firstNameInput);
    show(surnameInput);
  } else {
    editButton.textContent = 'Edit';
    hide(firstNameInput);
    hide(surnameInput);
    show(firstNameText);
    show(surnameText);
  }

  firstNameInput.value = firstName;
  surnameInput.value = surname;

  firstNameText.textContent = firstName;
  surnameText.textContent = surname;
  helloText.textContent = 'Hello ' + firstName + ' ' + surname + '!';
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');

let firstNameText = document.getElementById('firstNameText');
let surnameInput = document.getElementById('surnameInput');
let surnameText = document.getElementById('surnameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
surnameInput.oninput = handleSurnameChange;

updateDOM();