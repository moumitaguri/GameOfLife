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

const findNeighbours = function(cell){
  let array = [-1,0,1]
  let neighbours = [];
  array.forEach((row)=>
    array.forEach((column)=>{
      neighbours.push([row+cell[0], column+cell[1]]);
    }))
  return neighbours.filter((position)=> !(position[0]==cell[0] && position[1] == cell[1]));
}

module.exports = { initialGrid, updateGrid, findNeighbours };
