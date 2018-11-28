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

const stateOfWorld = function(size,inputdata){
  let grid = createBoard(size);
  for(let index = 0; index < size; index++){
    for(let j = 0; j < inputdata.length; j++){
      let position = grid[index].indexOf(inputdata[j])
      if(position !== -1){
        grid[index][position] = 'A';
      }
    }
  }
  return grid;
}
module.exports = { createBoard,stateOfWorld };
