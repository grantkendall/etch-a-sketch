// TODO
// Convert user input to a number
// Restrict dimensions to not flex beyond 1:1
// Dynamically reconstruct grid (default size based on user's window)

const container = document.querySelector(".container");
const btn = document.querySelector("button");

document.addEventListener("mouseover", squareListener);

function getUserInput() {
    let input = prompt("How many rows and columns?");
    constructGrid(input);
};

function constructGrid(input) {
    for (let i = 0; i < input; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let i = 0; i < input; i++) {
            const square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
        container.appendChild(row);
    }
};

function squareListener(event) {
    let t = event.target;
    if(t.className == "square") {
        t.style.backgroundColor = "black";
    }
};

getUserInput();

