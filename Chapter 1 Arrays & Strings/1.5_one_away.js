/* Pseudo 1 O(n), O(n)
If difference in lengths exceeds 1
   Return false
Instantiate difference count
Set string1 to shortest and string 2 to longest
Add string1 character counts to map
Iterate through string2
   If character amount doesn't exist in map
      Add amount to difference count
   If difference count exceeds 1
      Return false
Return difference count < 2
*/

/* Code 1 O(n), O(n) */
function oneAway(s1, s2) {
   if(Math.abs(s1.length - s2.length) > 1) {
      return false;
   }
   let difCount = 0;
   const map = {};
   const [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];
   
   for(let ch of short) {
      map[ch] = ch in map ? map[ch]+1 : 1;
   }
   for(let ch of long) {
      if(!(ch in map) || map[ch] === 0) {
         difCount += 1;   
      }
      else {
         map[ch] -= 1;
      }
      if(difCount > 1) {
         return false;
      }
   }
   return difCount < 2;
}
