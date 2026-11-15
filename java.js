const openBtn = document.getElementById("opn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const darkBtn = document.getElementById("dark-theme");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const menuA = document.querySelectorAll(".menu-text");
const heroImg = document.getElementById("imgWrap");
//dark theme and opn btn
openBtn.addEventListener("click", function opnBurger() {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", function closeBurger() {
  menu.classList.remove("active");
});
darkBtn.addEventListener("click", function addDark() {
  document.body.classList.toggle("dark-theme");
  darkBtn.classList.toggle("white-btn");
  arrowLeft.classList.toggle("white-arrow");
  arrowRight.classList.toggle("white-arrow");
  menuA.forEach((item) => {
    item.classList.toggle("menu-text-white");
  });
  heroImg.classList.toggle("img-wrapper-darc");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
//local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  darkBtn.classList.add("white-btn");
}
if (savedTheme === "light") {
  document.body.classList.remove("dark-theme");
  darkBtn.classList.remove("white-btn");
}

//Modal window
const messageSend = document.getElementById("send-message");
const closeModal = document.getElementById("close-modal");
const opnModal = document.getElementById("opn-modal");
const modalPage = document.getElementById("modal-overlay");
opnModal.addEventListener("click", function modalWindow() {
  modalPage.classList.add("open");
});
closeModal.addEventListener("click", function closeWindow() {
  modalPage.classList.remove("open");
});

//carusele
const track = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carusele-slide");
let index = 0;
function move(step) {
  index = (index + step + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}
document.querySelector("#arrow-right").onclick = () => move(1);
document.querySelector("#arrow-left").onclick = () => move(-1);

//form validation
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
function ValidForm() {
  inputBtn.addEventListener("click", function () {
    if (inputName.value == "") {
      alert("Text your name ");
    } else if (
      inputName.value.length < 2 ||
      inputName.value.charAt(0) !== inputName.value.charAt(0).toUpperCase()
    ) {
      alert(
        "First sumbol of your name shoul be in upper case and your name should includes more that two sumbols",
      );
    } else if (
      inputEmail.value == "" ||
      !inputEmail.value.includes("@") ||
      inputEmail.value.indexOf(".") < inputEmail.value.indexOf("@")
    ) {
      alert("Area is empty or you need @ and . after @");
    } else if (inputText.value == "") {
      alert("Message area is empty ");
    }
  });
}
ValidForm();
