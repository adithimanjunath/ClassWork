document.addEventListener("DOMContentLoaded", () => {
    function addNumberToDisplay(number) {
        const display = document.getElementById('display');
        display.innerText += number;
    }

    function addOperatorToDisplay(operator) {
        const display = document.getElementById('display');
        const lastChar = display.innerText[display.innerText.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.innerText = display.innerText.slice(0, -1) + operator;
        } else {
            display.innerText += operator;
        }
    }

    function clearDisplayText() {
        document.getElementById('display').innerText = '';
    }

    function evaluate() {
        const display = document.getElementById('display');
        try {
            const result = eval(display.innerText);
            if (!isFinite(result)) {
                throw new Error ("");
                // alert ("Error");
            }
         
            display.innerText = result;
        } catch (error) {
            display.innerText = 'Error';
        }
    }

    // Add event listeners to the buttons
    const buttonsContainer = document.querySelector(".container");
    if (buttonsContainer) {
        buttonsContainer.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("button")) {
                const value = target.innerText;
                if (!isNaN(value)) {
                    addNumberToDisplay(value);
                } else if (['+', '-', '*', '/'].includes(value)) {
                    addOperatorToDisplay(value);
                } else if (value === 'C') {
                    clearDisplayText();
                } else if (value === '=') {
                    evaluate();
                }
            }
        });
    } else {
        console.error('Buttons container not found');
    }
    
});
