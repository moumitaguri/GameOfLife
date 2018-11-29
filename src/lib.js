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

module.exports = { initialGrid, updateGrid };
