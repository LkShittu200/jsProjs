const openBtn = document.querySelector(".open-btn");

const modalContent = document.querySelector(".modal-content");

const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function () {
  modalContent.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContent.style.display = "none";
});

window.addEventListener("click", function (e) {
  const target = e.target;
  console.log(target);
  if (target === modalContent) {
    modalContent.style.display = "none";
  }
});
