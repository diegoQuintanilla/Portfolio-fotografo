let enlaces = document.querySelectorAll("a");
let fotos = document.getElementById("fotos");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    enlace.classList.add("active");
  });
});
