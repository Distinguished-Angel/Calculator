let display = document.getElementById("display");

function appendSymbol(symbol) {
  if (display.innerText === "0") {
    display.innerText = symbol;
  } else {
    display.innerText += symbol;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  let current = display.innerText;
  if (current.length > 1) {
    display.innerText = current.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function squareRoot() {
  try {
    let value = eval(display.innerText.replace(/\^/g, "**"));
    let result = Math.sqrt(value);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

function calculate() {
  try {
    let expression = display.innerText.replace(/\^/g, "**");
    let result = eval(expression);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
