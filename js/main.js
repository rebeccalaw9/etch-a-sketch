


function buildGrid (squaresPerSide) {
    let container = document.getElementById("container");
    let squares = document.getElementsByClassName("square");
    let numSquares = squares.length;
    for (let i=0; i < numSquares; i++) {
        let div = squares[0];
        div.remove();
    }
    let totalSquares = squaresPerSide * squaresPerSide;
    let gridSize = 960;

    for (let i=1; i<=totalSquares; i++) {
        let div = document.createElement("div");
        const size = gridSize/squaresPerSide;
        div.style.height = size + "px";
        div.style.width = size + "px";
        div.addEventListener("mouseover", function() { 
            this.style.backgroundColor = "rebeccapurple"; 
        });
        div.className = "square";
        container.appendChild(div);  
        console.log("built");
    }
    
};
    
function clearGrid () {
    console.log("clear");
    squaresPerSide = 0;
    while (squaresPerSide > 100 || squaresPerSide < 1) {
        squaresPerSide = prompt("How many squares per side? Enter a number between 1 and 100." , "50");     
    };
    buildGrid(squaresPerSide);      

};

var button = document.getElementById("myBtn");
button.addEventListener("click", clearGrid);

let squaresPerSide = 16;
buildGrid(squaresPerSide);
    






  

                               

