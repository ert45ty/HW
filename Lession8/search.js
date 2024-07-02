const $inputSearch = document.getElementById("searchKeyword");
const $btnSearch = document.getElementById("btn-search");
let inforUser = [];

function renderUser(inforUser) {
  let listUser = "";
  for (let i = 0; i < inforUser.length; i++) {
    listUser += `<tr>
    <th scope="col">${inforUser[i].id}</th>
    <th scope="col">${inforUser[i].first_name + inforUser[i].last_name}</th>
    <th scope="col">${inforUser[i].email}</th>
  </tr>`;
  }
  document.getElementById("inforUser").innerHTML = listUser;
}
$btnSearch.onclick = function () {
  const searchValue = $inputSearch.value;
  const strings = [];
  for (let user of users) {
    if (
      user.first_name.includes(searchValue) ||
      user.last_name.includes(searchValue) ||
      user.email.includes(searchValue)
    ) {
      strings.push(user);
    }
  }
  renderUser(strings);
};
