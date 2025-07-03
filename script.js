function calculator() {
  console.log("🧮 Welcome to JS Calculator v1.0");
  console.log("Supported operations: +, -, *, /, %, ^, sqrt");
  
  const num1 = parseFloat(prompt("Enter the first number:"));
  const operation = prompt("Choose an operation (+, -, *, /, %, ^, sqrt):");
  let num2 = null;
  let result = null;

  if (operation !== "sqrt") {
    num2 = parseFloat(prompt("Enter the second number:"));
  }

  switch (operation) {
    case "+":
      result = num1 + num2;
      console.log(`✅ ${num1} + ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`✅ ${num1} - ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`✅ ${num1} * ${num2} = ${result}`);
      break;
    case "/":
      result = num2 === 0 ? "❌ Cannot divide by zero!" : num1 / num2;
      console.log(`✅ ${num1} / ${num2} = ${result}`);
      break;
    case "%":
      result = num1 % num2;
      console.log(`✅ ${num1} % ${num2} = ${result}`);
      break;
    case "^":
      result = Math.pow(num1, num2);
      console.log(`✅ ${num1} ^ ${num2} = ${result}`);
      break;
    case "sqrt":
      result = Math.sqrt(num1);
      console.log(`✅ √${num1} = ${result}`);
      break;
    default:
      console.log("❌ Invalid operation! Please try again.");
      return;
  }

  console.log("🎉 Done! Thanks for using JS Calculator.");
}

// 🔁 Call calculator
calculator();
