//Written with Team Moses
//declaration of object properties
//clickValue holds the winning arrays
let gameBoard = {
  clearAll: document.querySelector('#clearAll'),
  cells: document.querySelectorAll('.game'),
  displayArea: document.getElementById('displayArea'),
  checkWin: (clickValue) => {
  console.log(clickValue)
    const win = [
      ["1","2","3"],
      ["4","5","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["3","6","9"],
      ["1","5","9"],
      ["3","5","7"],
      ["7","8","9"],
    ];
    //array of winning combinations
    //condition is set of nested array

    for(let condition of win){
      let hasWon = true;
      if(clickValue === 'X') {
        for(let i = 0; i < condition.length; i++){
          if (!xArray.includes(condition[i])){
            hasWon = false;
            break;
          }
        }
      } else {
        for(let i = 0; i < condition.length; i++){
          if (!oArray.includes(condition[i])){
            hasWon = false;
            break;
          }
        }
      }
      if (hasWon === true) {
        displayArea.innerHTML = clickValue + ' is the winner!'
        for(let i =0; i < gameBoard.cells.length; i++){
          gameBoard.cells[i].removeEventListener('click',clickAble,false);

        }
        return
      }

    }
  }
}
//created
class Boxes {
  constructor(letter = "") {
    this.letter = letter;
    this.turn = 1;
    this.playerToggle = () => {
      let moves = 0;
      let clickValue="";
      while(moves<9){
        if(this.turn %2!==0){
          clickValue="X"
          moves++
          this.turn++
        }else{
          clickValue="O";
          moves++
          this.turn++
        }
        return clickValue
      }
    }
  }
};
//created a class boxes with a constructor holds playerToggle which tracks moves
const box = new Boxes("X")
box.letter

let xArray = []
let oArray = []
const clickAble = (event) =>{
  if(event.target.innerHTML === ''){
    let clickValue = box.playerToggle()
    event.target.innerHTML = clickValue;
    if(clickValue === "X"){
      xArray.push(event.target.id);
      gameBoard.checkWin('X',xArray);
    }else if (clickValue === "O"){
      oArray.push(event.target.id);
      gameBoard.checkWin('O',oArray);
    }
  }
}

for(let i =0; i < gameBoard.cells.length; i++){
  gameBoard.cells[i].addEventListener('click', clickAble)
};

gameBoard.clearAll.addEventListener("click",removeAll => {
  xArray = []
  oArray = []
  console.log(xArray)
  console.log(oArray)
  gameBoard.cells.forEach(cell => {
    cell.innerHTML =""
  });
});
