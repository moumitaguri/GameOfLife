const { equal,deepEqual } = require('assert');
const { createBoard,stateOfWorld } = require('../src/lib.js');

describe( 'createBoard()', function(){
  it( 'should return empty array for size 0', function(){
    deepEqual(createBoard(0),[]);
  });
  it('should return a nXn array for given size :n', function(){
    deepEqual(createBoard(1),[[0]]);
    deepEqual(createBoard(2),[[0,1],[2,3]]);
  });
});

describe( 'stateOfWorld()', function(){
  it('should return empty array for size 0', function(){
    deepEqual(stateOfWorld(0,[]),[]);
  });
  it('should return an array representing the states for given size :n and inputdata for alive elements',  function(){
    deepEqual(stateOfWorld(2,[0,1]),[['A','A'],[2,3]]);
  });
});
