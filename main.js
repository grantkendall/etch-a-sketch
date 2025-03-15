// TODO
// Convert user input to a number
// Restrict dimensions to not flex beyond 1:1
// Dynamically reconstruct grid (default size based on user's window)

const container = document.querySelector(".container");
const btn = document.querySelector("button");

const rndmColors = [
    "#000000",
    "#222222",
    "#444444",
    "#666666",
    "#888888",
]

document.addEventListener("mouseover", squareListener);
btn.addEventListener("click", () => reconstructGrid());

function getUserInput() {
    input = prompt("How many rows and columns?");
    if (input > 100) {
        input = 100;
    }
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

function reconstructGrid() {
    container.replaceChildren();
    getUserInput();
}

function squareListener(event) {
    let t = event.target;
    if(t.className == "square") {
        t.style.backgroundColor = rndmColors[Math.floor(Math.random() * rndmColors.length)];
    }
};

getUserInput();

