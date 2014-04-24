/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;

  // console.log('new board of size', n)
  var b = new Board({'n': n});

  var recursion = function(rowIndex) {
    // base case returns at end
    if(rowIndex === n) {
      var copy = [];
      for(var i = 0; i < n; i++) {
        copy.push(b.rows()[i].slice());   // stupid javascript
      }
      // console.log('pushing a solution')
      // console.log(copy)
      solution = copy;
      return;
    }

    // recursive case
    else {
      for(var i = 0; i < n; i++) {


        // console.log('toggling', rowIndex, i)
        // console.log('before', b.get(rowIndex)[i])
        b.togglePiece(rowIndex, i);       // try toggling row
        // console.log('after', b.get(rowIndex)[i])

        if(b.hasAnyRooksConflicts()) {      // if conflicts:
          // console.log('conflict found', rowIndex, i)
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);     // toggle it back
          // console.log('after', b.get(rowIndex)[i])
        }

        else {
          // console.log('beginning recursion on row', rowIndex+1)
          recursion(rowIndex+1);          // if no conflicts, recurse on next row
          // console.log('toggling', rowIndex, i, '(back)')
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);
          // console.log('after', b.get(rowIndex)[i])
        }
      }
    }
  };

  recursion(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  // console.log('new board of size', n)
  var b = new Board({'n': n});

  var recursion = function(rowIndex) {
    // base case returns at end
    if(rowIndex === n) {
      solutionCount++;
    }

    // recursive case
    else {
      for(var i = 0; i < n; i++) {


        // console.log('toggling', rowIndex, i)
        // console.log('before', b.get(rowIndex)[i])
        b.togglePiece(rowIndex, i);       // try toggling row
        // console.log('after', b.get(rowIndex)[i])

        if(b.hasAnyRooksConflicts()) {      // if conflicts:
          // console.log('conflict found', rowIndex, i)
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);     // toggle it back
          // console.log('after', b.get(rowIndex)[i])
        }

        else {
          // console.log('beginning recursion on row', rowIndex+1)
          recursion(rowIndex+1);          // if no conflicts, recurse on next row
          // console.log('toggling', rowIndex, i, '(back)')
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);
          // console.log('after', b.get(rowIndex)[i])
        }
      }
    }
  };

  recursion(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  console.log(n)
  var solution;

  // console.log('new board of size', n)
  var b = new Board({'n': n});
  console.log(b)

  var recursion = function(rowIndex) {
    console.log('beginning recursion on row', rowIndex)
    // base case returns at end
    if(rowIndex === n) {
      console.log('entering base')
      var copy = [];
      for(var i = 0; i < n; i++) {
        copy.push(b.rows()[i].slice());   // stupid javascript
      }
      console.log('pushing a solution')
      console.log(copy)
      solution = copy;
      return;
    }

    // recursive case
    else {
      console.log('entering recursive case')
      for(var i = 0; i < n; i++) {


        console.log('toggling', rowIndex, i)
        console.log('before', b.get(rowIndex)[i])
        b.togglePiece(rowIndex, i);       // try toggling row
        console.log('after', b.get(rowIndex)[i])

        if(b.hasAnyQueensConflicts()) {      // if conflicts:
          console.log('conflict found', rowIndex, i)
          console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);     // toggle it back
          console.log('after', b.get(rowIndex)[i])
        }

        else {
          console.log('beginning recursion on row', rowIndex+1)
          recursion(rowIndex+1);          // if no conflicts, recurse on next row
          console.log('toggling', rowIndex, i, '(back)')
          console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);
          console.log('after', b.get(rowIndex)[i])
        }
      }
    }
  };

  recursion(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  // console.log('new board of size', n)
  var b = new Board({'n': n});

  var recursion = function(rowIndex) {
    // base case returns at end
    if(rowIndex === n) {
      solutionCount++;
    }

    // recursive case
    else {
      for(var i = 0; i < n; i++) {


        // console.log('toggling', rowIndex, i)
        // console.log('before', b.get(rowIndex)[i])
        b.togglePiece(rowIndex, i);       // try toggling row
        // console.log('after', b.get(rowIndex)[i])

        if(b.hasAnyQueensConflicts()) {      // if conflicts:
          // console.log('conflict found', rowIndex, i)
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);     // toggle it back
          // console.log('after', b.get(rowIndex)[i])
        }

        else {
          // console.log('beginning recursion on row', rowIndex+1)
          recursion(rowIndex+1);          // if no conflicts, recurse on next row
          // console.log('toggling', rowIndex, i, '(back)')
          // console.log('before', b.get(rowIndex)[i])
          b.togglePiece(rowIndex, i);
          // console.log('after', b.get(rowIndex)[i])
        }
      }
    }
  };

  recursion(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
