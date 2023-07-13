const gridContainer = document.querySelector("#container");
let SelectedColor = 'black';
let gridSizeInput = document.querySelector("#gridSize");
gridSize = 20;
let gridCells;
let isMouseDown = false;



// making grid 
function createGrid() {
  // removes existing grids before we change to other grid sizes
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  gridSize = parseInt(gridSizeInput.value);

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

  let gridCount = 0
  while (gridCount<(gridSize*gridSize)) {
    const gridDivs =   document.createElement("div");
    gridDivs.classList.add("divs", "grid-border");
    gridContainer.appendChild(gridDivs);
    gridCount++
}

gridCells = document.querySelectorAll(".divs");


//etching the grids

gridCells.forEach(cell =>{
 
    cell.addEventListener("mousedown", () => {
        isMouseDown = true;
        cell.classList.add('hovered');
        cell.style.backgroundColor = `${SelectedColor}`;
    });

    cell.addEventListener("mouseup", ()=>{
        isMouseDown = false;
        cell.style.backgroundColor = `${SelectedColor}`;
        cell.classList.remove("hovered");
    });

    cell.addEventListener("mouseover", () =>{
        if (isMouseDown) {
            cell.classList.add("hovered");
            cell.style.backgroundColor = `${SelectedColor}` ;

        }
    });
});
}


// changing the color
var radioButtons = document.querySelectorAll('input[type="radio"][name="colors"]');

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    SelectedColor = this.value;
  });
});



// clear button
function clearGrid() {
    gridCells.forEach(cell => {
      cell.style.backgroundColor = "Whitesmoke"; // Set the background color to an empty string
    });
  }

createGrid();




const changeGridSizeBtn = document.querySelector("#changeGridSizeBtn");
changeGridSizeBtn.addEventListener("click", () => {
  createGrid(); // Update the grid size and recreate the grid
});


let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click',()=>{
    clearGrid();
});






