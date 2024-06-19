let resetBtn = document.querySelector(".reset"),
    pad = document.querySelector(".pad");

resetBtn.addEventListener('click', resetBoard);

function resetBoard() {
    let size = Number.parseInt(prompt("Choose pad resolution (1-100)")),
        dimensions = size * size;
    
    pad.innerHTML = "";

    for (let index = 0; index < dimensions; index++) {
        let pixel = document.createElement("div")
        pixel.classList.add("pixel");
        pixel.textContent = index
        pad.appendChild(pixel);
    }
}

