let gridsize = 16;
const gridCont = document.querySelector(".gridcontainer")

function init_grid() {
    let grid = document.createElement("div")
    grid.classList.add(".grid")
    gridCont.appendChild(grid)

    for (i=1; i <= gridsize; i++) {
        const row = document.createElement("div")
        row.classList.add("gridRow", `row${i}`)
        for (x=1; x <= gridsize; x++) {
            const box = document.createElement("div")
            box.classList.add("gridBox", `row${i}`, `col${x}`)
            row.appendChild(box)
        }
        grid.appendChild(row)
    }
}

init_grid()

const slider = document.querySelector(".slider")
const output = document.querySelector(".value")

slider.addEventListener("input", generateGrid)

function generateGrid(e) {
    gridsize = e.target.value

    while (gridCont.firstChild) {
        gridCont.removeChild(gridCont.firstChild)
    }

    var grid = document.createElement("div")
    grid.classList.add(".grid")
    gridCont.appendChild(grid)

    for (i=1; i <= gridsize; i++) {
        const row = document.createElement("div")
        row.classList.add("gridRow", `row${i}`)
        for (x=1; x <= gridsize; x++) {
            const box = document.createElement("div")
            box.classList.add("gridBox", `row${i}`, `col${x}`)
            row.appendChild(box)
        }
        gridCont.appendChild(row)
    }
}
