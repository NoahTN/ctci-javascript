/* Pseudo 1 O(n+m), O(n or m)
Create map
Iterate through string1
   Add characters to map
Iterate through string2
   Check if character in map
      Return false
   map[character]--
   If count in map is 0
      Delete entry
return map is empty
*/

/* Pseudo 2  O(n+m), O(n or m)
Create map
Determine shortest string
Iterate through short
   Add characters to map
Iterate through long
   Check if character in map
      Return false
   map[character]--
   If count in map is 0
      Delete entry
return map is empty
*/

/* Code 1 O(n+m), O(n) */
function checkPermutation(s, t) {
   const map = {};
   let [short, long] = s.length < t.length ? [s, t] : [t, s];

   for(let ch of short) {
      map[ch] = ch in map ? map[ch] + 1 : 1;
   }
   for(let ch of long) {
      if(!(ch in map)) {
         return false;
      }
      map[ch]--;
      if(!map[ch]) {
         delete map[ch];
      }
   }
   return !map.length;
}