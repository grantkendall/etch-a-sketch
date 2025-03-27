const container = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset-btn");
const blueBtn = document.querySelector(".blue-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");

const grayscale = [
    "#000000",
    "#222222",
    "#444444",
    "#666666",
    "#888888",
]

const rainbow = [
    "#88A5BF", // Blue-grey
    "#2182BF", // Blue
    "#88A61B", // Green
    "#F28C0F", // Orange
    "#F2620F", // Red-orange
]

let palette = "black"; 

document.addEventListener("mouseover", squareListener);
resetBtn.addEventListener("click", () => reconstructGrid());
blueBtn.addEventListener("click", () => changePalette("blue"));
rainbowBtn.addEventListener("click", () => changePalette("rainbow"));

function changePalette(color) {
    palette = color;
}

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
        t.style.backgroundColor = palette;
        if (palette == "rainbow") {
            t.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
        } 
    }
};

// getUserInput();
constructGrid(40);

