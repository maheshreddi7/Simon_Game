let game = [];
let user = [];
let btnss = ["yellow", "red", "purple", "green"];

let h22 = document.querySelector("h2");

let started = false;
let lev = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("started");
    started = true;
    levup();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000); // remove after 1 second
}

function levup() {
  user = [];
  lev++;
  h22.innerText = `level ${lev}`;
  let randindx = Math.floor(Math.random() * 3);
  let randcolor = btnss[randindx];
  game.push(randcolor);
  console.log(game);
  let randombtn = document.querySelector(`.${randcolor}`);
  btnFlash(randombtn);
}

function checkAns(indx) {
  if (game[indx] === user[indx]) {
    if (user.length === game.length) {
      setTimeout(levup(), 2000);
    }
  } else {
    h22.innerText = `Game Over : level ${lev} Press any key to start`;
    let body = document.querySelector("body");
    body.classList.add("back");
    setTimeout(function () {
      body.classList.remove("back");
    }, 1000);
  }
}

let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    let userColour = btn.getAttribute("id");
    user.push(userColour);
    console.log(user);
    checkAns(user.length - 1);
  });
}
