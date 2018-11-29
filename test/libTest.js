const { equal,deepEqual } = require('assert');
const { createGrid, initialGrid,findNeighbours } = require('../src/lib.js');

describe('createGrid()', function(){
  it('should return an empty array for length: 0 , breadth : 0', function(){
    deepEqual(createGrid(0,0),[]);
  });
  it('should return a lengthXbreadth array for given length and breadth', function(){
    deepEqual(createGrid(1,2),[[0],[0]]);
    deepEqual(createGrid(3,2),[[0,0,0],[0,0,0]]);
  });
});

describe('initialGrid()', function(){
  it('should return an empty array for empty cells and empty positions', function(){
    deepEqual(initialGrid(createGrid(0,0),[]),[]);
  });
  it('should return a array with updated values according to the given positions', function(){
    deepEqual(initialGrid(createGrid(3,2),[[0,0],[1,0]]),[[1,0,0],[1,0,0]]);
  });
});

describe('findNeighbours()', function(){
  it('should return a array with updated values according to the given positions', function(){
    deepEqual(findNeighbours([1,1]),[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
  });
});

