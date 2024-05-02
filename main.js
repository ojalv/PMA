/*
PMA (Password Management Aplication)

create a password management app that can create, delete and modify passwords and their description

things to considerate:

1.The app should begin by prompting the user for a master password. If the entered password is correct, it will grant access to the password vault containing all other passwords.
2.The app should display a list of the descriptions associated with each password.
3.When a password description is selected, the app reveals the associated password.


// inputs
  //masterPassword (V)
  //newPassword(for adding passwords) (V)
  //editPassword(for editing existing passwords) (V)
  //searchTerm(for searching passwords) (V)

// process
  //validateMasterPassword (V)
  //validateNewPassword(for adding passwords) - Check for password strength
  //displayListOfDescriptions
  //revealPassword
  //generatePassword(optional)
  //editPassword(modify existing password)
  //deletePassword(remove password)
  //searchPasswords(find especific password)

// outputs
  //listOfDesciptions(V)
  //password(V)
  //generatedPassword(optional)(V)

*/

function validateMasterPassword(masterPassword, inputPassword) {
  if (masterPassword == inputPassword) {
    alert("Correct Password");
    return true;
  }
  alert(`Wrong password`);
  return false;
}

function displayListOfDescriptions(passwords) {
  let list = "<ul>";

  passwords.forEach((password) => {
    list += `<li>${password.description}</li>`;
  });
  list += "</ul>";

  return list;
}
//inputs

let masterPassword = "12345";
let passwords = [
  { description: "bank", password: "superSecurePassword" },
  { description: "email", password: "superman123" },
  { description: "steam", password: "pl4yg4m3sth0d4y" },
  { description: "social security", password: "greenduck68" },
  { description: "job", password: "imBoooooring" },
];
let newPassword;
let editPassword;
let searchTerm;
const iMasterPassword = document.getElementById("masterPassword");
const iNewPasswordBtn = document.getElementById("newPassword");
const iEditPasswordBtn = document.getElementById("editPassword");
const iSearchTermBtn = document.getElementById("searchTerm");

//outputs
const oListOfDescriptions = document.getElementById("listOfDescriptions");
const opassword = document.getElementById("password");
const ogeneratedPassword = document.getElementById("generatedPassword");

//process

iMasterPassword.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (validateMasterPassword(masterPassword, iMasterPassword.value)) {
      alert("Welcome to PMA");
      document.getElementById("masterPasswordContainer").style.display = "none";
    }
  }
});
