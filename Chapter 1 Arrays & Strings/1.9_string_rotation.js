/* Pseudo 1 O(n), O(1)
If s1 length is equal to s2 length and not empty
   Return isSubstring(s1+s1, s2)
Return false
*/

/* Code 1 O(n), O(1) */
function stringRotation(s1, s2) {
   if(s1.length === s2.length && s1.length) {
      return (s1+s1).includes(s2);
   }
   return false;
}