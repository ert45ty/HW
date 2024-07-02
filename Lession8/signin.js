const $goToSignIn = document.getElementById("btn-go-to-sign-in");
const $firstName = document.getElementById("first-name");
const $lastName = document.getElementById("last-name");
const $emailSignIn = document.getElementById("email-sign-in");
const $passwordSignIn = document.getElementById("password-sign-in");
const $btnSignIn = document.getElementById("btn-sign-in");
const $formSignIn = document.getElementById("form-sign-in");
const $formLogin = document.getElementById("form-login");

$goToSignIn.onclick = function () {
  $formSignIn.style.display = "flex";
  $formLogin.style.display = "none";
};
$btnSignIn.onclick = function () {
  const firstNameValue = $firstName.value;
  const lastNameValue = $lastName.value;
  const emailValueSignIn = $emailSignIn.value;
  const passwordValueSignIn = $passwordSignIn.value;

  if (
    firstNameValue == "" ||
    lastNameValue == "" ||
    emailValueSignIn == "" ||
    passwordValueSignIn == ""
  ) {
    alert("Vui long nhap day du thong tin");
    return;
  }
  for (user of users) {
    if (user.email.includes(emailValueSignIn)) {
      alert("Thong tin tai khoan da ton tai");
      return;
    } else {
      const newUser = {
        id: users.length + 1,
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: emailValueSignIn,
        password: passwordValueSignIn,
      };
      users.push(newUser);
      console.log(users);
      alert("dang ki thanh cong");
      break;
    }
  }
  $formSignIn.style.display = "none";
  $formLogin.style.display = "block";
};
