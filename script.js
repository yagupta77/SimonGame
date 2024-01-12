let gameSeq = [];
let userSeq = [];
let btn = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
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
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btn[randomIdx];
  let randombtn = document.querySelector(`.${randomColor}`);
  //   console.log(randomIdx);
  //   console.log(randombtn);
  //   console.log(randomColor);
  gameSeq.push(randomColor);
  
  Gameflash(randombtn);
}
function checkAns(idx){
    console.log("current",level);
    
    if(userSeq[idx] ===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerText = `Game over! your score  ${level} press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

        }
}
function btnPress() {
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");

  
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for (let btns of allbtn) {
  btns.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;

}