const gridContainer = document.querySelector("#container");
let gridSize = parseInt(prompt("Enter the grid size: "));

let gridCount = 0

while (gridCount<(gridSize*gridSize)) {
    const gridDivs =   document.createElement("div");
    gridDivs.setAttribute('class',"divs");
    gridContainer.appendChild(gridDivs);
    gridCount++
}

gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
// gridDivs.style.border = "solid black";

let gridCells = document.querySelectorAll(".divs");
var isMouseDown = false;

gridCells.forEach(cell =>{
 
    cell.addEventListener("mousedown", () => {
        isMouseDown = true;
        cell.classList.add('hovered');
        cell.style.backgroundColor = 'black';
    });

    cell.addEventListener("mouseup", ()=>{
        isMouseDown = false;
        cell.style.backgroundColor = 'black';
        cell.classList.remove("hovered");
    });

    cell.addEventListener("mouseover", () =>{
        if (isMouseDown) {
            cell.classList.add("hovered");
            cell.style.backgroundColor = 'black';

        }
    })

});


// let hovers = document.querySelectorAll(".hovered");

// hovers.style.backgroundColor = "red";