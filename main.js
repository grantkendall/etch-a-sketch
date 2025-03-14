const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
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

// x = user input
function constructGrid(x) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let i = 0; i < x; i++) {
            const square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

constructGrid(100);

