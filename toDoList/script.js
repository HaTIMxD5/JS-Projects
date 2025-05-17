let ipt = document.getElementById("ipt");
let ull = document.getElementById("ull");
let btn = document.getElementById("btn");
let add = document.getElementById("add");

add.addEventListener("click", () => {
  let li = document.createElement("li");
  let b = document.createElement("button");

  li.textContent = ipt.value;
  b.id = "btn";
  b.textContent = "Delete"
  ull.appendChild(li);
  ull.appendChild(b);
  ipt.value = "";
  b.addEventListener("click", () => {
    li.remove();
    b.remove();
  });
});