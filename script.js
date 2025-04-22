const inputField = document.getElementById('ip');
const button = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function to update the output div
const updateOutput = (message) => {
    outputDiv.textContent = message;
};

// Add an onclick event listener to the button
button.onclick = () => {
    const userInput = Number(inputField.value); // Get the user input as a number

    // Check for valid input
    if (isNaN(userInput)) {
        updateOutput('Please enter a valid number!');
        return;
    }

    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            updateOutput(`Result: ${userInput}`); // Display the initial number
            resolve(userInput); // Resolve with the initial number
        }, 2000); // 2-second delay
    })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multiplied = num * 2; // Multiply by 2
                    updateOutput(`Result: ${multiplied}`); // Display the new result
                    resolve(multiplied); // Resolve with the new result
                }, 2000); // 2-second delay
            });
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const subtracted = num - 3; // Subtract 3
                    updateOutput(`Result: ${subtracted}`); // Display the new result
                    resolve(subtracted); // Resolve with the new result
                }, 1000); // 1-second delay
            });
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const divided = num / 2; // Divide by 2
                    updateOutput(`Result: ${divided}`); // Display the new result
                    resolve(divided); // Resolve with the new result
                }, 1000); // 1-second delay
            });
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const added = num + 10; // Add 10
                    updateOutput(`Final Result: ${added}`); // Display the final result
                    resolve(added); // Resolve with the final result
                }, 1000); // 1-second delay
            });
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
};

