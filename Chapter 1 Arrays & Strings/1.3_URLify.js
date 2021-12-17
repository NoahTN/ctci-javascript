/* Pseudo 1 O(n), O(n)
Return split string and join with '%20'
*/


/* Pseudo 2 O(n), O(1)
end pointer at length of string-1
i pointer at length of string-1
Iterate through string backwards with i
   If non-space char found
      Set character at end to char
      Decrement end
   Else
      Set string at end-2 to end to %20
      Decrement end by 3
*/

/* Code 1 */
function URLify(string) {
   return string.split(' ').filter(word => word.length > 0).join("%20");
}
