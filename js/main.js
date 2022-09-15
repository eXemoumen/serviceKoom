const btn1 = document.getElementsByClassName(".arowbtn");
const btn2 = document.getElementsByClassName(".arowbtn.splash1");
const btn3 = document.getElementsByClassName(".arowbtn.splash2");
const skipbtn = document.getElementsByClassName(".skipbtn");
const darkthemebtn = document.getElementById(["btn"]);
const moon = document.getElementsByClassName(".moon");
const sun = document.getElementsByClassName(".sun");
var flag = 0;
var cont = "";
console.log(localStorage.getItem("cont"));

function next() {
  window.location.href = "../serviceKoom/pages/firstpage.html";
  console.log("dsds");
}
function next2() {
  window.location.href = "../pages/secondpage.html";
  console.log("dsds");
}
function next3() {
  window.location.href = "../pages/theredpage.html";
  console.log("dsds");
}
function next4() {
  window.location.href = "../pages/fourthepage.html";
  console.log("dsds");
}

function skip() {
  window.location.href = "../pages/fourthepage.html";
  console.log("dsds");
}

function dark() {
  if (flag === 0) {
    document.body.style.animation = "backgrond 1.5s ease  forwards";
    document.body.style.animationIterationCount = "1";
    document.body.style.setProperty("--backgrond_color", "#000000");
    document.body.style.backgroundColor = "#000000";
    document.body.style.setProperty("--font_color", "#ffffff");
    document.body.style.setProperty("--bleu_color", "#06243b");
    flag = 1;
    localStorage.cont = 1;
    return;
  } else {
    document.body.style.animation = "backgrond 1.5s ease-in forwards";
    document.body.style.animationIterationCount = "1";
    document.body.style.setProperty("--backgrond_color", "#ffffff");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.setProperty("--font_color", "#000000");
    document.body.style.setProperty("--bleu_color", "#0477BF");
    flag = 0;
    localStorage.cont = 0;
    return;
  }
}
function load() {
  if (localStorage.getItem("cont") == 1) {
    document.body.style.animation = "backgrond 1.5s ease  forwards";
    document.body.style.animationIterationCount = "1";
    document.body.style.setProperty("--backgrond_color", "#000000");
    document.body.style.backgroundColor = "#000000";
    document.body.style.setProperty("--font_color", "#ffffff");
    document.body.style.setProperty("--bleu_color", "#06243b");
    console.log("fdd");
  } else {
    document.body.style.animation = "backgrond 1.5s ease-in forwards";
    document.body.style.animationIterationCount = "1";
    document.body.style.setProperty("--backgrond_color", "#ffffff");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.setProperty("--font_color", "#000000");
    document.body.style.setProperty("--bleu_color", "#0477BF");
    console.log("here");
  }
}
