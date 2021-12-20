/* Pseudo 1 O(n), O(1)
Instantiate output string
Instantiate counter
Loop through string
   If zero index or character equals previous
      Increment counter
   Else
      Concatenate character plus counter to output
Return original string if output length is greater or equal else output
*/

/* Code 1 O(n), O(1) */
function stringCompression(str) {
   if(!str) { 
      return str;
   }

   let output =  '';
   let counter = 0;
   for(let i = 0; i < str.length; i++) {
      if(i === 0 || str[i] === str[i-1]) {
         counter += 1
      }
      else {
         output += str[i-1] + counter;
         counter = 1;
      }
   }
   output += str.substr(-1) + counter;
   return output.length < str.length ? output : str;
}