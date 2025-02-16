function calculate() {
    let operation = document.getElementById("operation").value;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result;

    if ([1, 2, 3, 4].includes(parseInt(operation))) {
        if (operation == 1) result = num1 + num2;
        else if (operation == 2) result = num1 - num2;
        else if (operation == 3) result = num1 * num2;
        else if (operation == 4) {
            if (num2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero";
                return;
            }
            result = Math.floor(num1 / num2);
        }
        document.getElementById("result").innerText = `Result: ${result}`;
    } else {
        document.getElementById("result").innerText = "Invalid choice";
    }
}
