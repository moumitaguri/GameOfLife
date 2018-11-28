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
  let board = createBoard(size);
  for(let index = 0; index < size; index++){
    board[index]=board[index].map(x=> "D");
    for(let j = 0; j < inputdata.length; j++){
      board[Math.floor(inputdata[j]/size)][inputdata[j]%size]="A";
    }
  }
  return board;
}

const findNeighbours = function(size,cell){
  let neighbourCells = [ [cell[0], cell[1]-1], [cell[0],cell[1]+1] ];

  neighbourCells.push([cell[0]-1, cell[1]-1]);
  neighbourCells.push([cell[0]-1, cell[1]]);
  neighbourCells.push([cell[0]-1, cell[1]+1]);
  neighbourCells.push([cell[0]+1, cell[1]-1]);
  neighbourCells.push([cell[0]+1, cell[1]]);
  neighbourCells.push([cell[0]+1, cell[1]+1]);

  return neighbourCells.filter(filterNeighbours(size));
}

module.exports = { createBoard, initialBoard };
