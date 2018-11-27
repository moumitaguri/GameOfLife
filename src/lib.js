const createBoard = function(size){
  let board = [];
  for(let index = 0; index < size; index++){
    let row = new Array(size).fill(0);
    board.push(row);
  } 
  return board;
}

module.exports = { createBoard };
