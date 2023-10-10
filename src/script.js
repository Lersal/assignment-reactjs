let index = 1;

document.getElementById("tambah").addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {
    task: document.getElementById("task").value,
    deadline: document.getElementById("deadline").value,
    repeat: document.getElementById("repeat").value,
    priority: document.getElementById("priority").value,
    status: "belum dikerjakan",
  };
  let tr = document.createElement("tr");
  tr.innerHTML =
    '<th scope="row" data-label="No">' +
    index++ +
    "</th>" +
    "<td data-label='Tugas'>" +
    data.task +
    "</td>" +
    "<td data-label='Prioritas'>" +
    data.priority +
    "</td>" +
    "<td data-label='Deadline'>" +
    data.deadline +
    "</td>" +
    "<td data-label='Status'>" +
    data.status +
    "</td>";
  // ("<td><button>edit</button></td>");
  tr.appendChild(document.createElement("td"));
  let edit = document.createElement("button");
  edit.textContent = "edit";
  edit.addEventListener("click", function () {
    if (edit.textContent == "edit") {
      let a = document.createElement("input");
      a.setAttribute("type", "text");
      a.value = tr.children[1].textContent;
      tr.children[1].textContent = "";
      tr.children[1].appendChild(a);

      edit.textContent = "save";
    } else {
      tr.children[1].textContent = tr.children[1].children[0].value;
      edit.textContent = "edit";
    }
  });
  tr.lastChild.appendChild(edit);
  document.querySelector("tbody").appendChild(tr);
});

document.getElementById("tambah").addEventListener("submit", function () {
  let delDisplay = document.getElementById("table");
  delDisplay.classList.remove("hidden");
  let addDisplay = document.getElementById("table");
  addDisplay.classList.add("table");

  let delRound = document.getElementById("line");
  delRound.classList.remove("rounded-full");
  let addRound = document.getElementById("line");
  addRound.classList.add("rounded-t-xl");
});
