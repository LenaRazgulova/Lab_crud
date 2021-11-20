function showdob() {
  document.getElementById("dob").style.display = "block";
}

function showud(str) {
  document.getElementById("ud").style.display = "block";
  var daBtn = document.querySelector(".udstr");
  daBtn.onclick = function (e) {
    str.remove();
    hide();
  };
  document.querySelector(".och").addEventListener("click", function (e) {
    hide();
  });
}

function hide() {
  document.getElementById("dob").style.display = "none";
  document.getElementById("chng").style.display = "none"
  document.getElementById("ud").style.display = "none";
}

for (let dobElement of document.getElementsByClassName("dob")) {
  dobElement.addEventListener("click", showdob);
}


for (let ochElement of document.getElementsByClassName("och")) {
  ochElement.addEventListener("click", hide);
}
for (let zakElement of document.getElementsByClassName("zak")) {
  zakElement.addEventListener("click", hide);
}

var deleteBtns = document.querySelectorAll(".ud");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var stroka = e.target.parentElement.parentElement;
    showud(stroka);
  });
});
var CurRow

document.querySelector(".dob-btn").onclick = function () {
  document.getElementById("tab").style.display = "block";
  const data = {
    name: document.querySelector("input[name = 'text']").value,
    phone: document.querySelector("input[name = 'nomber']").value,
    email: document.querySelector("input[name = 'email']").value,
    group: document.querySelector("input[name = 'group']").value
  }
  const tr = renderRow(data)
  document.querySelector("table").append(tr)
  hide()
}
var changeBtns = document.querySelectorAll(".chng")
var changeForm = document.querySelector("#chng")
var changeFormSubmitBtn = document.querySelector(".chng-btn")


changeBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    changeForm.style.display = "block"
    CurRow = btn.parentElement.parentElement
    insertData(CurRow.children)
  })
})

changeFormSubmitBtn.addEventListener("click", e => {
  var allInputs = changeForm.querySelectorAll("input")
  console.log(allInputs)
  for (let i = 0; i < CurRow.childElementCount - 1; i++) {
    console.log(CurRow.children[i], allInputs[i])
    CurRow.children[i].textContent = allInputs[i + 1].value
    hide()
  }
})

function insertData(data) {
  console.log(data)
  changeForm.querySelector("input[name = 'text']").value = data[0].textContent
  changeForm.querySelector("input[name = 'nomber']").value = data[1].textContent
  changeForm.querySelector("input[name = 'email']").value = data[2].textContent
  changeForm.querySelector("input[name = 'group']").value = data[3].textContent
}


function renderRow(data) {
  let row = `
    <td>${data.name}</td>
    <td>${data.phone}</td>
    <td>${data.email}</td>
    <td>${data.group}</td>
    `;

  const deleteBtn = document.createElement("input");
  deleteBtn.classList.add("ud");
  deleteBtn.value = "Удалить";
  deleteBtn.type = "button"
  deleteBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    showud(ev.target.parentElement.parentElement);
  });
  const changeBtn = document.createElement("input");
  changeBtn.classList.add("chng");
  changeBtn.value = "Изменить";
  changeBtn.type = "button"
  changeBtn.addEventListener("click", (ev) => {
    changeForm.style.display = "block"
    CurRow = changeBtn.parentElement.parentElement
    insertData(CurRow.children)
  });

  const deleteTh = document.createElement("th");
  deleteTh.append(changeBtn, deleteBtn);
  let tr = document.createElement("tr");
  tr.innerHTML = row;
  tr.append(deleteTh);
  return tr;
} 