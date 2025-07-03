const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout          
});

console.log("🧮 Welcome to JavaScript Calculator");
console.log("Supported operations: +, -, *, /, %, ^, sqrt");

rl.question("Enter the first number: ", (firstInput) => {
  const num1 = parseFloat(firstInput);

  rl.question("Choose an operation (+, -, *, /, %, ^, sqrt): ", (operator) => {
    if (operator === "sqrt") {
      const result = Math.sqrt(num1);
      console.log(`✅ √${num1} = ${result}`);
      rl.close();
    } else {
      rl.question("Enter the second number: ", (secondInput) => {
        const num2 = parseFloat(secondInput);
        let result;

        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "❌ Cannot divide by zero!";
            break;
          case "%":
            result = num1 % num2;
            break;
          case "^":
            result = Math.pow(num1, num2);
            break;
          default:
            result = "❌ Invalid operator!";
        }

        console.log(`✅ Result: ${result}`);
        rl.close();
      });
    }
  });
});
