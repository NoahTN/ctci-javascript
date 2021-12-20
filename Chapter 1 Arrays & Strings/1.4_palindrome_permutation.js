/* Pseudo 1 O(n), O(n)
Create map
Create leftover count
Loop through string and count only alphavetical case-insensitive occurences in map
Loop through string and add remainder when divided by two to leftover count
Return leftover count < 2;
*/

/* Code 1 O(n), O(n) */
function palindromePermutation(string) {
   const map = {};
   let remain = 0;
   for(let ch of string) {
      if(ch.match(/[a-z]/i)) {
         ch = ch.toLowerCase();
         map[ch] = ch in map ? map[ch]+1 : 1;
      }
   }
   for(let letter in map) {
      map[letter] %= 2;
      remain += map[letter];
   }
   return remain < 2;
}