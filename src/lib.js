const initialGrid = function(length,breadth){
  let  cells = new Array(breadth).fill(length);
  return cells.map( x=> new Array(x).fill(0));
}

const makeCellAlive = function(cells,position){
  cells[position[0]][position[1]] = 1;
  return cells;
}

const updateGrid = function(cells,positionsWhereToMakeAlive){
  return positionsWhereToMakeAlive.reduce(makeCellAlive,cells);
}

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
const filterNeighbours = function(size) {
  return function(position) {
    return position.every(isRealNeighbour(size));
  }
}
const isRealNeighbour = function(size) {
  return function(index) {
    return !(index < 0 || index >= size);
  }
}


module.exports = { initialGrid, updateGrid, createBoard, initialBoard ,findNeighbours };
