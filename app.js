let size = 16;
let currentSize = 16

// Get document elements
const apply = document.querySelector(".apply");
const reset = document.querySelector(".reset")
const gridContainer = document.querySelector(".gridContainer")
const slider = document.querySelector(".slider")
const sizeLabel = document.querySelector(".sizeLabel")
const clear = document.querySelector(".clear")

// Initialize grid
generateBoxes(size);

// Apply-Button event listeners
apply.addEventListener("click", function () {
    apply.classList.remove("hover")

    if (size !== currentSize) {
        clearBoxes();
        generateBoxes(size);
    }
});

apply.addEventListener("mouseenter", function () {
    apply.classList.add("hover")
});

apply.addEventListener("mouseleave", function () {
    apply.classList.remove("hover")
});

// Clear-Button event listeners
clear.addEventListener("click", function() {
    clear.classList.remove("hover")
    clearBoxes();
    generateBoxes(currentSize);
});

clear.addEventListener("mouseenter", function () {
    clear.classList.add("hover")
});

clear.addEventListener("mouseleave", function () {
    clear.classList.remove("hover")
});


// Reset-Button event listeners
reset.addEventListener("click", function() {
    reset.classList.remove("hover")
    clearBoxes();
    size = 16
    sizeLabel.innerHTML = "16 x 16"
    slider.value = 16
    generateBoxes(size);
});

reset.addEventListener("mouseenter", function () {
    reset.classList.add("hover")
});

reset.addEventListener("mouseleave", function () {
    reset.classList.remove("hover")
});

// Slider size value listener
slider.addEventListener("input", function(e) {
    size = e.target.value
    sizeLabel.innerHTML = `${size}` + " x " + `${size}`
});

// Grid Box event listener
gridContainer.addEventListener("mouseover", function(e) {
    if (e.target.matches(".gridBox")) {
        e.target.classList.add("active")
        console.log(e.target)
    }
}, false);



// Add boxes to grid
function generateBoxes(edgeBoxes) {
    for (i=0; i < edgeBoxes; i++) {
        let row = document.createElement("div")
        row.classList.add("gridRow", `row${i}`)
        for (a=0; a < edgeBoxes; a++) {
            let box = document.createElement("div");
            box.classList.add("gridBox", `row${i}`, `col${a}`);
            row.appendChild(box);
        };
        gridContainer.appendChild(row)
        currentSize = edgeBoxes
    };
} ;

// Clear boxes from grid
function clearBoxes() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    };
};


