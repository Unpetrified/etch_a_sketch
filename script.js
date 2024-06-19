let resetBtn = document.querySelector(".reset"),
    pad = document.querySelector(".pad");

resetBoard(16);

resetBtn.addEventListener('click', resetBoard);

function resetBoard(size=16) {
    
    if (size !== 16) {
        let gridSize = Number.parseInt(prompt("Choose pad resolution (1-100)"));
        size = gridSize;
    }
    
    pad.innerHTML = "";

    for (let index = 0; index < size; index++) {
        let pixelRow = document.createElement("div");
        pixelRow.classList.add("pixel-row");

        let dimensions = 100/size;
        pixelRow.setAttribute("height", dimensions+"%");

        for (let i = 0; i < size; i++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("width", dimensions+"%");

            pixelRow.appendChild(pixel);         
        }

        pad.appendChild(pixelRow);
    }
}

