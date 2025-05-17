let instagram = "https://www.instagram.com/";
let button = document.getElementById("btn");
let ipt = document.getElementById("ipt");


function searchForUsername() {
  button.addEventListener("click", () => {
    window.open(instagram + ipt.value, "_blank");
  });
}