let listMission = localStorage.getItem("listMission");
if (listMission === null) {
  listMission = [];
} else {
  listMission = JSON.parse(listMission);
}
let listMissionDone = localStorage.getItem("listMissionDone");
if (listMissionDone === null) {
  listMissionDone = [];
} else {
  listMissionDone = JSON.parse(listMissionDone);
}
const $mission = document.getElementsByClassName("mission");
const $inputMission = document.getElementById("inputMission");
const $btnAdd = document.getElementById("btnAdd");
const $btnAll = document.getElementById("btn-all");
const $btnActive = document.getElementById("btn-active");
const $btnCompleted = document.getElementById("btn-completed");
const $active = document.getElementById("active");
const $completed = document.getElementById("completed");
const $deleteAll = document.getElementById("btn-delete-all");
const $btnDelete = document.getElementsByClassName("btnDelete");
const $taskDone = document.getElementsByClassName("task-done");
$btnAll.onclick = function () {
  $active.style.display = "block";
  $completed.style.display = "block";
  $deleteAll.style.display = "none";
  for (i of $btnDelete) {
    i.style.display = "none";
  }
};
$btnActive.onclick = function () {
  $active.style.display = "block";
  $completed.style.display = "none";
  $deleteAll.style.display = "none";
};
$btnCompleted.onclick = function () {
  $completed.style.display = "block";
  $active.style.display = "none";
  $deleteAll.style.display = "flex";
  for (i of $btnDelete) {
    i.style.display = "flex";
  }
};
const $checkbox = document.getElementsByClassName("checkbox");
function renderMission(listMission) {
  let strings = "";
  for (let i = 0; i < listMission.length; i++) {
    strings += `<div id="mission">
  <input class="checkbox" onclick = checkedBox(${i}) type="checkbox" />
  <span class="mission">${listMission[i]}</span>
</div>`;
  }
  document.getElementById("table-mission").innerHTML = strings;
}
function renderMissionDone(listMissionDone) {
  let stringDone = "";
  for (let i = 0; i < listMissionDone.length; i++) {
    stringDone += `<div id="task-done" class="task-done">
    <div id="task">
      <input class="checkbox-checked" type="checkbox" checked />
      <span class="mission-strike"><strike>Task done</strike></span>
    </div>
    <div id="btn-delete">
      <button id="btnDelete" class="btnDelete" onclick = deleteMission(${i}) style="border: none; background-color: white">
        <i class="fa-solid fa-trash"></i></button>
    </div>
    </div>`;
  }
  document.getElementById("completed").innerHTML = stringDone;
}
renderMission(listMission);
renderMissionDone(listMissionDone);
$btnAdd.onclick = function () {
  const inputValue = $inputMission.value;
  console.log(inputValue);
  listMission.push(inputValue);
  localStorage.setItem("listMission", JSON.stringify(listMission));
  renderMission(listMission);
  $inputMission.value = "";
};
function checkedBox(index) {
  listMission.splice(index.parentNode, 1);
  localStorage.setItem("listMission", JSON.stringify(listMission));
  renderMission(listMission);
  listMissionDone.length++;
  renderMissionDone(listMissionDone);
}
function deleteMission(index) {
  listMissionDone.splice(index.parentNode, 1);
  localStorage.setItem("listMissionDone", JSON.stringify(listMissionDone));
  renderMissionDone(listMissionDone);
}
$deleteAll.onclick = function () {
  for (i in $taskDone) {
    $completed.remove($taskDone[i]);
  }
};
