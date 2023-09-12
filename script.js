document.addEventListener("DOMContentLoaded", function () {
    const riskAmountInput = document.getElementById("riskAmount");
    const entryPriceInput = document.getElementById("entryPrice");
    const stoplossPriceInput = document.getElementById("stoplossPrice");
    const calculateButton = document.getElementById("calculateButton");
    const riskManagementText = document.querySelector(".risk-management-text");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const riskAmount = parseFloat(riskAmountInput.value);
        const entryPrice = parseFloat(entryPriceInput.value);
        const stoplossPrice = parseFloat(stoplossPriceInput.value);

        if (!isNaN(riskAmount) && !isNaN(entryPrice) && !isNaN(stoplossPrice)) {
            const positionSize = Math.abs(riskAmount / (entryPrice - stoplossPrice));
            resultDiv.textContent = `Position Size: ${positionSize.toFixed(2)}`;
            
            // Hide risk management text with a fade effect
            riskManagementText.classList.add("hidden");
            
            // Show the result text
            resultDiv.style.display = "block";
        } else {
            resultDiv.textContent = "Please enter valid numbers.";
        }
    });
});
