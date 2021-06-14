//all variables
let unhappy = document.getElementById("unhappy");
let neutral = document.getElementById("neutral");
let satisfied = document.getElementById("satisfied");
let heart = document.getElementById("heart");
let btn = document.getElementById("btn");
let sp = document.getElementById("sp");
let wrapp1 = document.getElementById("wrapp1");
let wrapp2 = document.getElementById("wrapp2");

let info = "";
unhappy.onclick = function() {
  info = "Unhappy";
  box1.style.boxShadow = "0 0 3px #000";
  box2.style.boxShadow = "none";
  box3.style.boxShadow = "none";
}

neutral.onclick = function() {
  info = "Neutral";
  box1.style.boxShadow = "none";
  box2.style.boxShadow = "0 0 3px #000";
  box3.style.boxShadow = "none";
}

satisfied.onclick = function() {
  info = "Satisfied";
  box1.style.boxShadow = "none";
  box2.style.boxShadow = "none";
  box3.style.boxShadow = "0 0 3px #000";
}

btn.onclick = function() {
  sp.innerText = info;
  wrapp2.style.display = "flex";
  wrapp1.style.display = "none";
  btn.style.marginTop = "10px";
}