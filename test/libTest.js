const { equal,deepEqual } = require('assert');
const { initialGrid,findNeighbours,createBoard,initialBoard } = require('../src/lib.js');
describe('initialGrid()', function(){
  it('should return an empty array for length: 0 , breadth : 0', function(){
    deepEqual(initialGrid(0,0),[]);
  });
  it('should return a lengthXbreadth array for given length and breadth', function(){
    deepEqual(initialGrid(1,2),[[0],[0]]);
    deepEqual(initialGrid(3,2),[[0,0,0],[0,0,0]]);
  });
});


describe( 'createBoard()', function(){
  it( 'should return empty array for size 0', function(){
    deepEqual(createBoard(0),[]);
  });
  it('should return a nXn array for given size :n', function(){
    deepEqual(createBoard(1),[[0]]);
    deepEqual(createBoard(2),[[0,1],[2,3]]);
  });
});

describe( 'initialBoard()', function(){
  it('should return empty array for size 0', function(){
    deepEqual(initialBoard(0,[]),[]);
  });
  it('should return an array representing the states for given size :n and inputdata for alive elements',  function(){
    deepEqual(initialBoard(2,[0,1]),[['A','A'],['D','D']]);
  });
});
describe("findNeighbours", function() {
  describe("for corner cells", function() {
    it("should return three neighbour cells", function() {
      let result = [ [ 0, 1 ], [ 1, 0 ], [ 1, 1 ] ];
      deepEqual(findNeighbours(3,[0,0]),result);
    });
  });

  describe("for edge cells", function() {
    it("should return five neighbour cells", function() {
      let result = [ [ 0, 0 ], [ 0, 2 ], [ 1, 0 ], [ 1, 1 ], [ 1, 2 ] ];
      deepEqual(findNeighbours(3,[0,1]), result);
    });
  });

  describe("for middle cells", function() {
    it("should return nine neighbour cells", function() {
      let result = [ [ 1, 0 ],
        [ 1, 2 ],
        [ 0, 0 ],
        [ 0, 1 ],
        [ 0, 2 ],
        [ 2, 0 ],
        [ 2, 1 ],
        [ 2, 2 ] ];
      deepEqual(findNeighbours(3,[1,1]), result);
    });
  });
});
