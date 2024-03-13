document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

function calculateBMI() {
    var heightInput = document.getElementById('height').value;
    var weightInput = document.getElementById('weight').value;

    if (heightInput === "" || weightInput === "") {
        alert("Please enter both height and weight.");
        return;
    }

    var height = parseFloat(heightInput) / 100; // Convert height to meters
    var weight = parseFloat(weightInput);

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to two decimal places

    var result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    document.getElementById('result').innerHTML = "Your BMI is " + bmi + ". This is considered " + result + ".";
}
