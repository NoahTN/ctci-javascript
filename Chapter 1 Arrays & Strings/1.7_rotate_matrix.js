/* Pseudo 1
Return early if matrix is empty or is not square

*/

/* Code 1 */
function rotateMatrix(matrix) {
   if(matrix.length === 0 || matrix.length !== matrix[0].length) {
      return;
   }
   for(let i = 0; i < matrix.length / 2; i++) {
      let first = i;
      let last = matrix.length - 1 - i;
      for(let j = i; j < last; j++) {
         let offset = j-i;
         let top = matrix[first][j];
         matrix[first][j] = matrix[last-offset][first];
         matrix[last-offset][first] = matrix[last][last-offset]
         matrix[last][last-offset] = matrix[j][last];
         matrix[j][last] = top;
      }
   }
}