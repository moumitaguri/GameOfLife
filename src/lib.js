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

module.exports = { createBoard };
