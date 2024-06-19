let resetBtn = document.querySelector(".reset"),
    pad = document.querySelector(".pad");

resetBoard(16);

resetBtn.addEventListener('click', resetBoard);

function resetBoard(size=16) {
    
    if (size !== 16) {
        let gridSize = Number.parseInt(prompt("Choose pad resolution (1-100)"));
        if (gridSize > 100) {
            alert("Dimension cannot exceed 100 X 100");
            resetBoard(1);
            return;
        }

        if (gridSize < 1) {
            alert("Dimension must be atleast 1 X 1");
            resetBoard(1);
            return;
        }

        size = gridSize;
    }
    
    pad.innerHTML = "";

    if (size === 1) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("style", `heigh:100%; width:100%;`);
        pixel.setAttribute("height", "100%");
        pixel.setAttribute("opacity", 0);

        pixel.addEventListener('mouseover', makeSketch);

        pad.appendChild(pixel)

        return
    }

    for (let index = 0; index < size; index++) {
        let pixelRow = document.createElement("div");
        pixelRow.classList.add("pixel-row");

        let dimensions = 100/size;
        pixelRow.setAttribute("height", dimensions+"%");

        for (let i = 0; i < size; i++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("width", dimensions+"%");
            pixel.setAttribute("opacity", 0);

            pixel.addEventListener('mouseover', makeSketch);

            pixelRow.appendChild(pixel);         
        }

        pad.appendChild(pixelRow);
    }
}

function makeSketch(e) {
    let opacity = Number.parseFloat(e.target.getAttribute("opacity"));

    if (opacity > 1) return;

    opacity += 0.1;
    
    e.target.setAttribute("opacity", opacity)
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
}