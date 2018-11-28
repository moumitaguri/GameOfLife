const { equal,deepEqual } = require('assert');
const { createBoard } = require('../src/lib.js');

describe( 'createBoard()', function(){
  it( 'should return empty array for size 0', function(){
    deepEqual(createBoard(0),[]);
  });
  it('should return a nXn array for given size :n', function(){
    deepEqual(createBoard(1),[[0]]);
    deepEqual(createBoard(2),[[0,1],[2,3]]);
  });
});
