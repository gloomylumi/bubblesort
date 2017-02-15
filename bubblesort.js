'use strict'

function bubbleSort( arr ) {
  for ( var i = arr.length - 1; i > 0; i-- ) {
    for ( var index1 = 0; index1 < i; index1++ ) {
      var index2 = index1 + 1
      if ( arr[ index1 ] > arr[ index2 ] ) {
        [ arr[ index1 ], arr[ index2 ] ] = [ arr[ index2 ], arr[ index1 ] ]
      }
    }
  }
  return arr
}
