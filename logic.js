const input = document.getElementById("input");
const buttons = document.querySelectorAll(".inputNum button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            input.textContent = ""; // Clear display
        } else if (value === "=") {
            try {
                if (input.textContent === "6+6") {
                    input.textContent = "I miss you"; // Easter egg for 6+6
                } else if(input.textContent === "10+10"){
                    input.textContent = "Oten"; // Easter egg for 10+10 
                } else {
                    input.textContent = eval(input.textContent); // Evaluate expression
                }
            } catch {
                input.textContent = "Error"; // Handle errors
            }
        } else if (value === "DEL") {
            input.textContent = input.textContent.slice(0, -1); // Remove last character
        } else {
            input.textContent += value; // Append button value
        }
    });
});
