window.onload = function () {
  var openbtn = document.getElementById("btn_open");
  var closebtn = document.getElementById("btn_close");
  var modal = document.getElementById("modal");
  var overlay = document.querySelector(".overlay");

  openbtn.addEventListener("click", function () {
    modal.classList.toggle("visible");
    overlay.style.display = "block";
  });

  closebtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
    overlay.style.display = "none"; // Hide overlay
  });
};
