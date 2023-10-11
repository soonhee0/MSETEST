"use strict";
const text = document.getElementById("text");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // クリックすると
  text.textContent = caliculatedNumber;
  let caliculatedNumber = () => {
    return 10000 - text.value;
  };
});
//課題を実施しました
