// Write your code here!
// Step 1: Remove the <main> element with id "main"
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element and assign it to a variable named `newHeader`
const newHeader = document.createElement("h1");

// Step 3: Give it an id of "victory"
newHeader.id = "victory";

// Step 4: Set the text of the new header
newHeader.textContent = "Peter Munyambu is the champion"; // Replace with your actual name

// Step 5: Append the new header to the document body
document.body.append(newHeader);
