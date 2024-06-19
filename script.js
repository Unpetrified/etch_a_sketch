let resetBtn = document.querySelector(".reset"),
    pad = document.querySelector(".pad"),
    rainbow = document.querySelector(".rainbow"),
    rainbowMode = false;

resetBoard(16);

resetBtn.addEventListener('click', resetBoard);
rainbow.addEventListener('click', toggleRainbow);

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

    for (let index = 0; index < size; index++) {
        let pixelRow = document.createElement("div");
        pixelRow.classList.add("pixel-row");

        let dimensions = 100/size;
        pixelRow.setAttribute("style", `height: ${dimensions}%;`);

        for (let i = 0; i < size; i++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("style", `width: ${dimensions}%;`);
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

    if (!rainbowMode) {
        opacity += 0.1;
    }
    
    e.target.setAttribute("opacity", opacity)

    if (rainbowMode) {
        e.target.style.backgroundColor = getRandomPalette(1);  
    } else {
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
}

function toggleRainbow() {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        rainbow.style.backgroundColor = "rgb(0, 0, 139)";
    } else {
        rainbow.style.backgroundColor = "blue";
    }

}

function getRandomPalette(opacity) {
    let red = Math.ceil((1.5 + Math.random()) * 100),
        green = Math.ceil((1.5 + Math.random()) * 100),
        blue = Math.ceil((1.5 + Math.random()) * 100),
        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

    return color;
}