// const userName = prompt("Enter your first name:");
// const userSurname = prompt("Enter your last name:");
const toHTML = document.querySelector("#elem");
let userMail = prompt("Enter your email:");

if (userMail.includes("@")) {
  userMail = userMail.replaceAll(" ", "").toLowerCase();
  toHTML.innerHTML = userMail;
  console.log(userMail);
} else {
  userMail = userMail.replaceAll(" ", "").toLowerCase();
  toHTML.innerHTML =
    "not valid email <b>" + userMail + "</b>  (symbol @ not exist)";
}

// let result = `${userName.trim()} ${userSurname.trim()}\n${userMail.trim()}`;
// console.log(result);
// //console.log(userSurname.trim());

// alert(result);
// //alert(userSurname.trim());
// //alert(userMail.trim());
