const StandardArray5E = [15, 14, 13, 12, 10, 8];
let currentRollFull = [0, 0, 0, 0, 0, 0];
const rollHystory = [];
const rollBtn = document.querySelector('.rollBtn');
const rollStandardBtn = document.querySelector('.rollStandardBtn');

const standardArray = () => {
  setDiceValue(StandardArray5E);
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
  let arrWithMaxNum = [0];
  for (let sixRolls = 0; sixRolls < 6; sixRolls++) {
    currentRollFull = [];
    for (let i = 0; i < 6; i++) {
      currentRollFull[i] = ' ' + diceRoll();
    }
    currentRollFull.sort(function (a, b) {
      return b - a;
    });

    for (let i = 0; i < 6; i++) {
      if (currentRollFull[i] < 10) {
        currentRollFull[i] = ('0' + currentRollFull[i]).replace(/\s/g, '');
      }
    }

    if (rollHystory.length < 6) {
      rollHystory.push(`${currentRollFull.slice(',').join(' - ')}`);
    } else {
      rollHystory.shift();
      rollHystory.push(`${currentRollFull.slice(',').join(' - ')}`);
    }
    document.querySelector('.rollHistory').innerHTML = rollHystory
      .map((el) => el + '</br>')
      .slice(',')
      .join(' ');
    if (currentRollFull[0] > arrWithMaxNum[0]) {
      arrWithMaxNum = currentRollFull.map((el) => el);
    } else if (
      currentRollFull[0] == arrWithMaxNum[0] &&
      currentRollFull[1] > arrWithMaxNum[1]
    ) {
      arrWithMaxNum = currentRollFull.map((el) => el);
    }
  }
  setDiceValue(arrWithMaxNum);
  /**=============== Situational rules ===============**/
  // rollBtn.removeEventListener("click", diceMultiRoll);
  // rollBtn.style.display = "none";
  // rollStandardBtn.style.display = "none";
};

const setDiceValue = (arr) => {
  document.querySelector('#d1').textContent = arr[0] || 0;
  document.querySelector('#d2').textContent = arr[1] || 0;
  document.querySelector('#d3').textContent = arr[2] || 0;
  document.querySelector('#d4').textContent = arr[3] || 0;
  document.querySelector('#d5').textContent = arr[4] || 0;
  document.querySelector('#d6').textContent = arr[5] || 0;
};
window.addEventListener('load', setDiceValue);

rollBtn.addEventListener('click', diceMultiRoll);

rollStandardBtn.addEventListener('click', standardArray);
