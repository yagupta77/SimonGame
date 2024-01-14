
let gameSeq = [];
let userSeq = [];
let btn = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startButton = document.querySelector("#Start"); // Correcting the selection for the Start button
startButton.addEventListener("click", function () { // Adding event listener for the Start button
  if (started == false) {
    console.log("Game Started");
    started = true;
  }
  levelUp();
});

function Gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // To choose Random Button
  let randomIdx = Math.floor(Math.random() * 4); // Fixing the off-by-one error
  let randomColor = btn[randomIdx];
  console.log(randomColor)
  let randombtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq)

  Gameflash(randombtn);
}

function checkAns() {
        if (userSeq[userSeq.length - 1] !== gameSeq[userSeq.length - 1]) {
            h2.innerText = `Game over! Your score: ${level}`;
            document.querySelector("body").style.backgroundColor = "red";
            reset();
            setTimeout(function () {
                location.reload()
                document.querySelector("body").style.backgroundColor = "white";
            }, 200);
        } else if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        console.log(userSeq);
        console.log(gameSeq);
    }
    


function btnPress() {
  let btn = this;
//   console.log(btn)
  userflash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns();
  console.log(userSeq)
//   console.log(gameSeq)
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
//   location.reload()
}

let allbtn = document.querySelectorAll(".btn");
for (let btns of allbtn) {
  btns.addEventListener("click", btnPress);
}
