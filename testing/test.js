let buttons = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9")

];

let rows = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let isXTurn = true;

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let row = Math.floor(index / 3);
    let col = index % 3;

    if (rows[row][col] === "") {
      rows[row][col] = isXTurn ? "X" : "O";

      isXTurn = !isXTurn;

      console.log(rows);
    }
  });
});
