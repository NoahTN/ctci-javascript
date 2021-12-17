/* Pseudo 1  O(n), O(n)
Create Set
Iterate through string
   Check if in set
      Return false
   Add to set
Return true
*/

/* Pseudo 2 O(n^2), O(1)
Iterate through string
   Iterate through string starting from next position
      Check if characters are the same
         Return false
Return true
*/

/* Code 1 O(n), O(n) */
function isUnique(string) {
   const set = new Set();
   for(let ch of string) {
      if(set.has(ch)) {
         return false;
      }
      set.add(ch);
   }
   return true;
}

/* Code 2 O(nlogn) O(1) */
function isUnique(string) {
   string.sort();
   for(let i = 1; i < string.length; i++) {
      if(string[i-1] === string[i]) {
         return false;
      }
   }
   return true;
}