let d = [  
  document.getElementById("d1"),
  document.getElementById("d2"),
  document.getElementById("d3"),
  document.getElementById("d4"),
  document.getElementById("d5"),
  document.getElementById("d6"),
  document.getElementById("d7"),
  document.getElementById("d8"),
  document.getElementById("d9")
];
let divs = [
  [document.getElementById("d1"), document.getElementById("d2"), document.getElementById("d3")],
  [document.getElementById("d4"), document.getElementById("d5"), document.getElementById("d6")],
  [document.getElementById("d7"), document.getElementById("d8"), document.getElementById("d9")]
];

let allD = document.querySelectorAll("#d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9");

let isXTurn = true;

d.forEach((btn) => {
  btn.addEventListener("click", () => {

    let span = btn.querySelector("span");

    if (span.className !== "X" && span.className !== "O") {
      span.className = isXTurn ? "X" : "O";

      isXTurn = !isXTurn;
      let win1 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d4 span"),
        document.querySelector("#d7 span"),
      ];
      let win2 = [
        document.querySelector("#d2 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d8 span"),
      ];
      let win3 = [
        document.querySelector("#d3 span"),
        document.querySelector("#d6 span"),
        document.querySelector("#d9 span"),
      ];
      let win4 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d2 span"),
        document.querySelector("#d3 span"),
      ];
      let win5 = [
        document.querySelector("#d4 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d6 span"),
      ];
      let win6 = [
        document.querySelector("#d7 span"),
        document.querySelector("#d8 span"),
        document.querySelector("#d9 span"),
      ];
      let win7 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d9 span"),
      ];
      let win8 = [
        document.querySelector("#d3 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d7 span"),
      ];
      const wins = [win1, win2, win3, win4, win5, win6, win7, win8];
      // let winCalls = [win1Called, win2Called, win3Called, win4Called, win5Called, win6Called, win7Called, win8Called];
      // let XhasRun;
      let XwinStates = win1.every(win => win.classList.contains("X")) || win2.every(win => win.classList.contains("X")) || win3.every(win => win.classList.contains("X")) || win4.every(win => win.classList.contains("X")) || win5.every(win => win.classList.contains("X")) || win6.every(win => win.classList.contains("X")) || win7.every(win => win.classList.contains("X")) || win8.every(win => win.classList.contains("X"));
      if (XwinStates) {
        console.log("Player One Wins!");
        // XhasRun = true;
        return true;
      } else if (Array.from(allD).every(d => d.querySelector("span").className === "X" || d.querySelector("span").className === "O")) {
        console.log("It's a draw!");
        return true;
      }
      let OwinStates = win1.every(win => win.classList.contains("O")) || win2.every(win => win.classList.contains("O")) || win3.every(win => win.classList.contains("O")) || win4.every(win => win.classList.contains("O")) || win5.every(win => win.classList.contains("O")) || win6.every(win => win.classList.contains("O")) || win7.every(win => win.classList.contains("O")) || win8.every(win => win.classList.contains("O"));
      if (OwinStates) {
        console.log("Player Two Wins!");
        return true;
      } else if (Array.from(allD).every(d => d.querySelector("span").className === "X" || d.querySelector("span").className === "O")) {
        console.log("It's a draw!");
        return true;
      }
    }
  });
});