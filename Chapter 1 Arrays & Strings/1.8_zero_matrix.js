/* Pseudo 1 O(nm), O(n+m)
Create n length array
Create m length array
Iterate through matrix row
   Iterate through matrix column
      If 0
         Update arrays at respective indices to true
Iterate through n range
   Iterate through m range
      If 0 in n or m array
         Set matrix at index to 0
*/

/* Code 1 O(nm), O(n+m)*/ 
function zeroMatrix(matrix) {
   const zeroRow = Array(matrix.length).fill(false);
   const zeroCol = Array(matrix[0].length).fill(1);
   for(let r = 0; r < matrix.length; r++) {
      for(let c = 0; c < matrix[r].length; c++) {
         if(matrix[r][col] === 0) {
            zeroRow[r] = true;
            zeroCol[c] = true;
         }
      }
   }
   for(let r = 0; r < zeroRow.length; r++) {
      for(let c = 0; c < zeroCol.length; c++) {
         if(zeroRow[r] || zeroCol[c]) {
            matrix[r][c] = 0;
         }
      }
   }
}