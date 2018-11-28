const createBoard = function(size){
  let board = [];
  let count = 0;
  for(let index = 0; index < size; index++){
    let row =  [] ;
    for(let j = 0; j < size; j++){
      row.push(count++)
    } 
    board.push(row);
  }
  return board;
}

const initialBoard = function(size,inputdata){
  let grid = createBoard(size);
  for(let index = 0; index < size; index++){
    grid[index]=grid[index].map(x=> "D");
    for(let j = 0; j < inputdata.length; j++){
      grid[Math.floor(inputdata[j]/size)][inputdata[j]%size]="A";
    }
  }
  return grid;
}

module.exports = { createBoard, initialBoard };
