const container = document.querySelector(".container");
const btn = document.querySelector("button");

let rowCounter = 0;

btn.addEventListener("click", () => {
    rowCounter++;
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < rowCounter; i++) {
        addSquares(row);
    }
    container.appendChild(row);
});

function addSquares(x) {
    const square = document.createElement("div");
    square.className = "square";
    x.appendChild(square);
}



// Get reference to number of rows
// Append that many children to each row
// Do I need to add rows to an array?
