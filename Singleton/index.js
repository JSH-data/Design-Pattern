import red from "./redButton.js";
import blue from "./blueButton.js";

const rBtn = document.getElementById("red");
const bBtn = document.getElementById("blue");

function init() {
  rBtn.addEventListener("click", () => {
    console.log("ssss");
    red();
  });
  bBtn.addEventListener("click", () => {
    console.log("ssss");
    blue();
  });
}

init();
