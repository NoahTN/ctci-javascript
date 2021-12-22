/* Pseudo 1 
Create input stack
Create output stack (Reverses)

Push O(1)
   Push into input stack
 
Pop O(n)
   Call QueueUp
   Pop from output stack

QueueUp O(n)
   While there are elements in input stack
      Pop from input stack into output stack
*/

/* Code 1 */
class MyQueue {
   constructor() {
      this._input = [];
      this._output = [];
   }

   push(value) {
      this._input.push(value);
   }

   pop() {
      if(!this._input.length && !this._output.length) {
         return false;
      }
      this.queueUp();
      return this._output.pop();
   }

   queueUp() {
      while(this._input.length) {
         this._output.push(this._input.pop());
      }
   }
}