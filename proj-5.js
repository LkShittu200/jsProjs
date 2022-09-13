// Variables

const enterTask = document.getElementById("enter-task");

const addTask = document.getElementById("add-task");

const containerTask = document.querySelector(".container-task");

addTask.addEventListener("click", function () {
  let input = document.createElement("div");
  input.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${enterTask.value}`;
  input.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa fa-check-square" ></i>';
  checkBtn.classList.add("check-task");
  input.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash" ></i>';
  deleteBtn.classList.add("delete-task");
  input.appendChild(deleteBtn);

  if (enterTask.value === "") {
    alert("Please enter a Task");
  } else {
    containerTask.appendChild(input);
  }

  enterTask.value = "";

  checkBtn.addEventListener("click", function () {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
