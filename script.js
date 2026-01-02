function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.textContent = 'Please enter valid height and weight.';
        result.className = 'result';
        result.style.display = 'block';
        return;
    }

    const bmi = weight / (height * height);
    result.style.display = 'block';

    let category, colorClass;
    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'underweight';
    } else if (bmi < 25) {
        category = 'Normal';
        colorClass = 'normal';
    } else if (bmi < 30) {
        category = 'Overweight';
        colorClass = 'overweight';
    } else {
        category = 'Obese';
        colorClass = 'obese';
    }

    result.innerHTML = `Your BMI: ${bmi.toFixed(1)}<br>${category}`;
    result.className = `result ${colorClass}`;
}
