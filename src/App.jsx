import React from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
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
  });
  return (
    <div className="">
      <header className="mt-20 sm:mt-40 grid auto-rows-max grid-cols-12 gap-4">
        <div className="p-4 col-start-3 col-span-8 font-bold text-5xl border  bg-slate-50 rounded-md">
          <h2 className="p-2 col-start-3 col-span-full font-bold text-3xl sm:text-4xl md:text-6xl">
            To Do List
          </h2>
          <h3 className="pl-7 pb-4 col-start-3 col-end-13 md:col-end-7 text-xl md:text-2xl mt-2 sm:mt-8">
            Membuat daftar tugas-tugas yang ingin kamu lakukan
          </h3>
        </div>
      </header>
      {/* Menambahkan tugas */}
      <section>
        <details className="mt-12">
          <summary className="font-semibold text-center p-2 w-40 md:w-52 mx-auto bg-slate-50 hover:bg-gray-50 text-dark rounded-md cursor-pointer ">
            Tambah Tugas
          </summary>
          <div className="flex justify-center">
            {/* Isisan tugas */}
            <form
              id="tambah"
              className="grid auto-rows-max col-start-4 col-end-9 mt-4 border w-3/4 md:w-8/12 lg:w-7/12 shadow-lg rounded-xl bg-gray-50"
            >
              <label htmlFor="task" className="text-xl p-3">
                Nama Tugas
              </label>
              <input
                type="text"
                id="task"
                name="task"
                placeholder="Tugas yang Harus Dilakukan"
                required
                className="mx-5 px-2 py-1 border-solid border-2 border-sky-500 hover:border-sky-600 focus:outline-sky-800 rounded-lg"
              />
              <label htmlFor="deadline" className="text-xl p-3">
                Batas Akhir
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="mx-5 px-2 py-1 border-solid border-2 border-sky-500 hover:border-sky-600 focus:outline-sky-800 rounded-lg"
              />
              <label htmlFor="repeat" className="text-xl p-3">
                Ulang
              </label>
              <select
                id="repeat"
                required
                className="mx-5 px-2 py-1 border-solid border-2 border-sky-500 hover:border-sky-600 focus:outline-sky-800 rounded-lg"
              >
                <option value={1} selected className="bg-gray-200">
                  Sekali
                </option>
                <option value={2} className="bg-gray-200">
                  Setiap Hari
                </option>
                <option value={3} className="bg-gray-200">
                  Setiap Minggu
                </option>
                <option value={4} className="bg-gray-200">
                  Setiap Bulan
                </option>
              </select>
              <label htmlFor="priority" className="text-xl p-3">
                Prioritas
              </label>
              <select
                id="priority"
                required
                className="mx-5 px-2 py-1 border-solid border-2 border-sky-500 hover:border-sky-600 focus:outline-sky-800 rounded-lg"
              >
                <option value="Sangat Penting" className="bg-gray-200">
                  Sangat Penting
                </option>
                <option value="Penting" className="bg-gray-200">
                  Penting
                </option>
                <option value="Biasa" className="bg-gray-200" selected>
                  Biasa
                </option>
                <option value="Tidak Penting" className="bg-gray-200">
                  Tidak Penting
                </option>
              </select>
              <button
                type="submit"
                className="m-4 py-2 font-semibold text-center w-1/3 md:w-1/5 mx-auto bg-sky-500 hover:outline-sky-300 hover:bg-sky-400 text-white rounded-md"
              >
                Tambah
              </button>
            </form>
          </div>
        </details>
      </section>
      {/* Tabel Tugas */}
      <section className="my-20 mx-2 sm:mx-12">
        <div
          id="line"
          className="mx-auto w-1/2 h-2 bg-gradient-to-r from-blue-300 via-sky-500 to-sky-900 text-center rounded-full sm:w-11/12 md:w-10/12 lg:w-9/12"
        ></div>
        <figure>
          <table
            id="table"
            className="bg-gray-50 border-separate border-spacing-2 rounded-b-md border-2 border-slate-700 shadow-md mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 hidden"
          >
            {/* Untuk show tablenya, hiddenya di hapus*/}
            <thead>
              <tr>
                <th scope="col" id="No" className="border border-slate-500 w-9">
                  No
                </th>
                <th
                  scope="col"
                  id="Tugas"
                  className="border border-slate-500 w-72"
                >
                  Tugas
                </th>
                <th
                  scope="col"
                  id="Prioritas"
                  className="border border-slate-500 w-36"
                >
                  Prioritas
                </th>
                <th
                  scope="col"
                  id="Deadline"
                  className="border border-slate-500 w-36"
                >
                  Deadline
                </th>
                <th
                  scope="col"
                  id="Status"
                  className="border border-slate-500 w-40"
                >
                  Status
                </th>
                <th
                  scope="col"
                  id="Edit"
                  className="border border-slate-500 w-20"
                >
                  Edit
                </th>
              </tr>
            </thead>
            {/* Daftar-tugas */}
            <tbody></tbody>
          </table>
        </figure>
      </section>
    </div>
  );
}

export default App;
