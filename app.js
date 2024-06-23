//for to access element by class name
// let boxes=document.querySelectorAll(".box");
// let resetBtn=document.querySelector("reset-btn");

// let turno=true;
// let turnx=false;



// //1.winning condition 
// const winsPattern=[
// [0,1,2],
// [0,3,6],
// [0,4,8],
// [1,4,7],
// [2,5,8],
// [2,4,6],
// [3,4,5],
// [6,7,8],
// ];

// //2.after clicking each box button something will be trigger
// //for that adding event listener for each button
// boxes.forEach((box)=>{
    
//     //on clicking box this arrow function will work
//     box.addEventListener("click",()=>{
//         //3.when i click again that box so value should be changing for to fix that issue after clicking first then disable button
//         //this first if conidition i can replace it by disbled button 
//         if (!box.innerText) { 
//         if(turno){
//             //playero turn so it will print o
//             console.log("o")
//             box.innerText="o";
//             turno=false;
//         }else{
//             console.log("x")
//             //playerx turn so it will print x
//             box.innerText="x";
//             turno=true;
//         }
//     }
        
//         // box.disabled=true;
        
//         //4.checking winning codition for thst creating function 
//         // checkWinner();

//     })

// })

// // const checkWinner=()=>{
// //     for(let pattern of winsPattern){
// //         console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
// //     }
// // }



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");

let turno = true;
let turnx = false;

const winsPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let gameWon = false;

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    gameWon = false;
}

newGameBtn.addEventListener("click", () => {
    resetGame();
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.innerText && !gameWon) {
            if (turno) {
                console.log("o");
                box.innerText = "o";
                if (checkWin("o")) {
                    console.log("Player O wins!");
                    gameWon = true;
                    disableAllBoxes();
                    alert("Congratulations! Player O wins!");
                    newGameBtn.click(); // Trigger click event on New Game button
                }
                turno = false;
            } else {
                console.log("x");
                box.innerText = "x";
                if (checkWin("x")) {
                    console.log("Player X wins!");
                    gameWon = true;
                    disableAllBoxes();
                    alert("Congratulations! Player X wins!");
                    newGameBtn.click(); // Trigger click event on New Game button
                }
                turno = true;
            }
        }
    });
});

const checkWin = (player) =>
    winsPattern.some((pattern) =>
        pattern.every((index) => boxes[index].innerText === player)
    );

function disableAllBoxes() {
    boxes.forEach((box) => {
        box.removeEventListener("click", boxClickHandler);
    });
}
