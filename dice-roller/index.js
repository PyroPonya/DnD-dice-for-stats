const StandardArray5E = [15, 14, 13, 12, 10, 8];
let currentRollFull = [0, 0, 0, 0, 0, 0];
const rollHystory = [];

const standardArray = () => {
  currentRollFull = StandardArray5E;
  setDiceValue();
};

const diceRoll = () => {
  const currentRoll = [];
  for (let i = 0; i < 4; i++) {
    currentRoll.push(Math.floor(Math.random() * 6 + 1));
  }
  currentRoll
    .sort(function (a, b) {
      return b - a;
    })
    .pop();
  return currentRoll.reduce((a, b) => a + b, 0);
};

const diceMultiRoll = () => {
  currentRollFull = [];
  for (let i = 0; i < 6; i++) {
    currentRollFull[i] = " " + diceRoll();
  }
  currentRollFull.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < 6; i++) {
    if (currentRollFull[i] < 10) {
      currentRollFull[i] = ("0" + currentRollFull[i]).replace(/\s/g, "");
    }
  }

  if (rollHystory.length < 6) {
    rollHystory.push(`${currentRollFull.slice(",").join(" - ")}`);
  } else {
    rollHystory.shift();
    rollHystory.push(`${currentRollFull.slice(",").join(" - ")}`);
  }
  document.querySelector(".rollHistory").innerHTML = rollHystory
    .map((el) => el + "</br>")
    .slice(",")
    .join(" ");
  setDiceValue();
};

const setDiceValue = () => {
  document.querySelector("#d1").innerHTML = currentRollFull[0] || 0;
  document.querySelector("#d2").innerHTML = currentRollFull[1] || 0;
  document.querySelector("#d3").innerHTML = currentRollFull[2] || 0;
  document.querySelector("#d4").innerHTML = currentRollFull[3] || 0;
  document.querySelector("#d5").innerHTML = currentRollFull[4] || 0;
  document.querySelector("#d6").innerHTML = currentRollFull[5] || 0;
};
window.addEventListener("load", setDiceValue);

document.querySelector(".rollBtn").addEventListener("click", diceMultiRoll);

document
  .querySelector(".rollStandardBtn")
  .addEventListener("click", standardArray);
