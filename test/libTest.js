const { equal,deepEqual } = require('assert');
const { initialGrid, updateGrid,findNeighbours,createBoard,initialBoard } = require('../src/lib.js');
describe('initialGrid()', function(){
  it('should return an empty array for length: 0 , breadth : 0', function(){
    deepEqual(initialGrid(0,0),[]);
  });
  it('should return a lengthXbreadth array for given length and breadth', function(){
    deepEqual(initialGrid(1,2),[[0],[0]]);
    deepEqual(initialGrid(3,2),[[0,0,0],[0,0,0]]);
  });
});

describe('updateGrid()', function(){
  it('should return an empty array for empty cells and empty positions', function(){
    deepEqual(updateGrid(initialGrid(0,0),[]),[]);
  });
  it('should return a array with updated values according to the given positions', function(){
    deepEqual(updateGrid(initialGrid(3,2),[[0,0],[1,0]]),[[1,0,0],[1,0,0]]);
  });
});
