const $inputEmail = document.getElementById("email");
const $inputPassword = document.getElementById("password");
const $btnLogin = document.getElementById("btn-login");

$btnLogin.onclick = function () {
  const emailValue = $inputEmail.value;
  const passwordValue = $inputPassword.value;
  if (emailValue == "" || passwordValue == "") {
    alert("hay nhap day du thong tin");
    return;
  }
  for (let user of users) {
    if (user.email === emailValue && user.password === passwordValue) {
      console.log("Xin chao " + user.first_name + " " + user.last_name);
    } else {
      console.log("Thong tin tai khoan khong chinh xac");
      return;
    }
  }
};
