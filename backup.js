// let d = document.getElementById("d");
let di1 = document.getElementById("d-1");
let di2 = document.getElementById("d-2");
let di3 = document.getElementById("d-3");
let di123 = document.querySelectorAll("#d-1, #d-2, #d-3")
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8 = document.getElementById("d8");
let d9 = document.getElementById("d9");
// let allD = document.querySelectorAll("#d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9");

let allS = document.querySelectorAll("#d1 span, #d2 span, #d3 span, #d4 span, #d5 span, #d6 span, #d7 span, #d8 span, #d9 span");

let span1 = d1.querySelector("span");
let span2 = d2.querySelector("span");
let span3 = d3.querySelector("span");
let span4 = d4.querySelector("span");
let span5 = d5.querySelector("span");
let span6 = d6.querySelector("span");
let span7 = d7.querySelector("span");
let span8 = d8.querySelector("span");
let span9 = d9.querySelector("span");


function playerOne() {

  allD.forEach(div => {
    let span = div.querySelector("span");
    
    div.addEventListener("click", () => {
      span.className = "X";
    });
  });
}
  


















// function fun() {
//   allS.forEach(el => {
//     el.addEventListener("click", () => {
//       if (!el.classList.contains("X")) {
//         el.className = "X";
//       }
//     });
//   });
// }

// fun();















// function playerOne() {
//   allS.forEach(el => {
//     el.addEventListener("click", () => {
//       if (!el.classList.contains("X")) {
//         el.className = "X"
//       }
//     });
//   });
// }
// playerOne();




















// let called = false;

// function playerOne() {
//   called = true;
//   allS.forEach(el => {
//     el.addEventListener("click", () => {
//       if (!allS.classList.contains("X")) {
//         el.classList.add("X");
//       }
//     });
//   });
// }
// playerOne();

// function playerTwo() {
//   if (called == true) {
//     allD.forEach(el => {
//       el.addEventListener("click", () => {
//         el.className = "O";
//       });
//     });
//   }
// }
// playerTwo();

// d1.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span1.classList.add("O");
//     } else {
//       span1.classList.add("X");
//     }
// });

// d2.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span2.className = "O";
//     } else {
//       span2.className = "X";
//     }
// });

// d3.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span3.className = "O";
//     } else {
//       span3.className = "X";
//     }
// });

// d4.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span4.className = "O";
//     } else {
//       span4.className = "X";
//     }
// });

// d5.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span5.className = "O";
//     } else {
//       span5.className = "X";
//     }
// });

// d6.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span6.className = "O";
//     } else {
//       span6.className = "X";
//     }
// });

// d7.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span7.className = "O";
//     } else {
//       span7.className = "X";
//     }
// });

// d8.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span8.className = "O";
//     } else {
//       span8.className = "X";
//     }
// });

// d9.addEventListener("click", () => {
  
//   if (d.classList.contains("X")) {
//       span9.className = "O";
//     } else {
//       span9.className = "X";
//     }
// });







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

d.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // let row = Math.floor(index / 3);
    // let col = index % 3;

    let span = btn.querySelector("span");

    if (span.className !== "X" && span.className !== "O") {
      span.className = isXTurn ? "X" : "O";

      isXTurn = !isXTurn;
      let win1 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d4 span"),
        document.querySelector("#d7 span"),
        win1Called
      ];
      let win2 = [
        document.querySelector("#d2 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d8 span"),
        win2Called
      ];
      let win3 = [
        document.querySelector("#d3 span"),
        document.querySelector("#d6 span"),
        document.querySelector("#d9 span"),
      win3Calle
      ];
      let win4 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d2 span"),
        document.querySelector("#d3 span"),
        win4Called
      ];
      let win5 = [
        document.querySelector("#d4 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d6 span"),
        win5Called
      ];
      let win6 = [
        document.querySelector("#d7 span"),
        document.querySelector("#d8 span"),
        document.querySelector("#d9 span"),
        win6Called
      ];
      let win7 = [
        document.querySelector("#d1 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d9 span"),
        win7Called
      ];
      let win8 = [
        document.querySelector("#d3 span"),
        document.querySelector("#d5 span"),
        document.querySelector("#d7 span"),
        win8Called
      ];
      if (win1.every(win => win.classList.contains("X")) || win2.every(win => win.classList.contains("X")) || win3.every(win => win.classList.contains("X")) || win4.every(win => win.classList.contains("X")) || win5.every(win => win.classList.contains("X")) || win6.every(win => win.classList.contains("X")) || win7.every(win => win.classList.contains("X")) || win8.every(win => win.classList.contains("X"))) {
        console.log("Player One Wins!");
      } else if (Array.from(allD).every(d => d.querySelector("span").className === "X" || d.querySelector("span").className === "O")) {
        console.log("It's a draw!");
      }
      if (win1.every(win => win.classList.contains("O")) || win2.every(win => win.classList.contains("O")) || win3.every(win => win.classList.contains("O")) || win4.every(win => win.classList.contains("O")) || win5.every(win => win.classList.contains("O")) || win6.every(win => win.classList.contains("O")) || win7.every(win => win.classList.contains("O")) || win8.every(win => win.classList.contains("O"))) {
        console.log("Player Two Wins!");
      } else if (Array.from(allD).every(d => d.querySelector("span").className === "X" || d.querySelector("span").className === "O")) {
        console.log("It's a draw!");
      }
    }
  });
});

