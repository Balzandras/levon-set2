// 1.REVERSE THE ARRAY
function reverseArray() {
    // Get the input value and split it into an array
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number); // Convert string inputs to numbers
    
    // Reverse the array in-place
    arr.reverse();

    // Display the result on the webpage
    document.getElementById("output1").innerText = "Reversed array: " + arr.join(", ");
}

// 2. REMOVE THE DUPLICATES 
function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If array is empty, return 0

    let i = 0; // Initialize the first pointer
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // Increment i when a new unique element is found
            nums[i] = nums[j]; // Update the position of i with the new element
        }
    }

    return i + 1; // Return the new length of the array (i is the last index of unique elements)
}

function removeDuplicatesFromArray() {
    // Get the input value and split it into an array
    const input = document.getElementById("arrayInput2").value;
    const nums = input.split(',').map(Number); // Convert string inputs to numbers
    
    // Find the new length after removing duplicates
    const newLength = removeDuplicates(nums);

    // Directly slice the unique elements without a loop
    const uniqueElements = nums.slice(0, newLength);

    // Display the result on the webpage
    document.getElementById("output2").innerText = 
        "New length: " + newLength + 
        "\nUnique elements: " + uniqueElements.join(", ");
}

//3.CALCULATOR JS
let chosenOperator = '';

    function registerUser() {
        // Get user inputs
        const name = document.getElementById('name').value;
        chosenOperator = document.getElementById('operator').value;

        // Simple validation to check if fields are filled
        if (name && chosenOperator) {
            // Hide signup and show calculator
            document.getElementById('signup-section').style.display = 'none';
            document.getElementById('calculator-section').style.display = 'block';

            // Display the selected operation and user's name
            document.getElementById('userName').innerText = name;
            document.getElementById('chosenOperator').innerText = 
                chosenOperator === '+' ? 'Addition' : 
                chosenOperator === '-' ? 'Subtraction' : 'Multiplication';
        } else {
            alert("Please fill in all fields.");
        }
    }

    function calculate() {
        const input1 = parseFloat(document.getElementById('input1').value);
        const input2 = parseFloat(document.getElementById('input2').value);
        let result;

        if (isNaN(input1) || isNaN(input2)) {
            alert("Please enter valid numbers.");
            return;
        }

        // Perform the chosen operation
        if (chosenOperator === '+') {
            result = input1 + input2;
        } else if (chosenOperator === '-') {
            result = input1 - input2;
        } else if (chosenOperator === '*') {
            result = input1 * input2;
        }

        // Display the result
        document.getElementById('output3').value = result;
    }