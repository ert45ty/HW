const $btnPost = document.getElementById("btn-go-to-post");
const $divSearch = document.getElementById("div-search");
const $tablePost = document.getElementById("table-post");
const $goBack = document.getElementById("btn-go-back");
const $divPost = document.getElementById("div-post");
const $divInforUser = document.getElementById("div-infor-User");
const $divPostUser = document.getElementById("div-post-user");
let listPosts = "";
$btnPost.onclick = function () {
  $formSignIn.style.display = "none";
  $formLogin.style.display = "none";
  $divSearch.style.display = "none";
  $divInforUser.style.display = "none";
  $tablePost.style.display = "block";
  $divPost.style.display = "flex";
  $divPostUser.style.display = "flex";
  for (i = 0; i < posts.length; i++) {
    let name = "";
    for (j = 0; j < users.length; j++) {
      if (posts[i].user_id === users[j].id) {
        name = users[j].first_name + users[j].last_name;
      }
    }
    listPosts += `<tr>
    <th scope="col">${posts[i].id}</th>
    <th scope="col">${posts[i].title}</th>
    <th scope="col">${posts[i].created_at}</th>
    <th scope="col">${name}</th>
  </tr>`;
  }
  document.getElementById("inforPost").innerHTML = listPosts;
};
$goBack.onclick = function () {
  $formSignIn.style.display = "none";
  $formLogin.style.display = "block";
  $divSearch.style.display = "flex";
  $divInforUser.style.display = "flex";
  $tablePost.style.display = "none";
};
const $btnDetails = document.getElementById("btn-see-details");
const $inputDetails = document.getElementById("searchID-details");

$btnDetails.onclick = function () {
  detailValue = Number($inputDetails.value);
  let detail = "";
  for (let i of posts) {
    if (i.id === detailValue) {
      let nameID = "";
      for (j = 0; j < users.length; j++) {
        if (i.user_id === users[j].id) {
          nameID = users[j].first_name + users[j].last_name;
        }
      }
      detail += `<tr>
        <th scope="col">${i.id}</th>
        <th scope="col">${i.title}</th>
        <th scope="col">${i.content}</th>
        <th scope="col">${i.image}</th>
        <th scope="col">${nameID}</th>
        <th scope="col">${i.created_at}</th>
        <th scope="col">${i.updated_at}</th>
      </tr>`;
      break;
    }
  }
  document.getElementById("details").innerHTML = detail;
};

const $inputDetailsEmail = document.getElementById("search-email-details");
const $btnDetailsEmail = document.getElementById("btn-see-details-email");

$btnDetailsEmail.onclick = function () {
  detailValueEmail = $inputDetailsEmail.value;
  let detailEmail = "";
  let nameEmail = "";
  for (let i of users) {
    if (i.email === detailValueEmail) {
      nameEmail = i.first_name + i.last_name;
      for (let j of posts) {
        if (i.id === j.user_id) {
          detailEmail += `<tr>
          <th scope="col">${j.user_id}</th>
          <th scope="col">${j.title}</th>
          <th scope="col">${j.content}</th>
          <th scope="col">${j.image}</th>
          <th scope="col">${nameEmail}</th>
          <th scope="col">${j.created_at}</th>
          <th scope="col">${j.updated_at}</th>
        </tr>`;
        }
      }
    }
  }
  document.getElementById("details-email").innerHTML = detailEmail;
};
