const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const status = document.getElementById("status");

let currentState = 0;
let intervalId = null;
let durations = {
  red: 5000,
  yellow: 3000,
  green: 7000,
  blinkYellow: 1000
};


function updateLights(state) {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  switch(state) {
    case 0:
      red.classList.add("active");
      status.textContent = "Стан: ЧЕРВОНИЙ";
      break;
    case 1:
      yellow.classList.add("active");
      status.textContent = "Стан: ЖОВТИЙ";
      break;
    case 2:
      green.classList.add("active");
      status.textContent = "Стан: ЗЕЛЕНИЙ";
      break;
    case 3:
      yellow.classList.toggle("active");
      status.textContent = "Стан: МИГОТЛИВИЙ ЖОВТИЙ";
      break;
  }
}

function nextState() {
  clearInterval(intervalId);
  console.log("nextState")

  if (currentState === 0) {
    currentState = 1;
    updateLights(currentState);
    intervalId = setTimeout(nextState, durations.yellow);
  } else if (currentState === 1) {
    currentState = 2;
    updateLights(currentState);
    intervalId = setTimeout(nextState, durations.green);
  } else if (currentState === 2) {
    currentState = 3;
    blinkCount = 0;
    startBlinking();
  } else if (currentState === 3) {
    currentState = 0;
    updateLights(currentState);
    intervalId = setTimeout(nextState, durations.red);
  }
}

function startBlinking() {
    console.log("blinking")
    updateLights(currentState);
    let blinkCount = 0;
    let blinkInterval = setInterval(() => {
        if (blinkCount > 6){
            yellow.classList.remove("active");
            clearInterval(blinkInterval)
            nextState()
        }
        if (blinkCount % 2 == 0){
            yellow.classList.add("active");
        }
        else{
            yellow.classList.remove("active");
        }
        blinkCount++
    }, 500)


}

function manualNext() {
  nextState();
}

function changeDurations() {
  const r = parseInt(prompt("Тривалість червоного (сек):", durations.red / 1000));
  const y = parseInt(prompt("Тривалість жовтого (сек):", durations.yellow / 1000));
  const g = parseInt(prompt("Тривалість зеленого (сек):", durations.green / 1000));
  if (!isNaN(r)) durations.red = r * 1000;
  if (!isNaN(y)) durations.yellow = y * 1000;
  if (!isNaN(g)) durations.green = g * 1000;
}

updateLights(currentState);
intervalId = setTimeout(nextState, durations.red);
