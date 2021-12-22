/* Pseudo 1 
Create array for stack
Push O(1)
   Push into stack an array of the value and current minimum value
Pop O(1)
   Pop from stack
Min O(1)
   Return the minimum value from the top element
*/

/* Code 1 */
class MinStack {
   constructor() {
      this._stack = [];
   }
   
  push(value) {
     this._stack.push([value, this._stack.length ? Math.min(value, this._stack.slice(-1)[1]) : value]);
  }

  pop() {
     try {
        return this._stack.pop();
     }
     catch (e) {
        console.error("ERROR: Stack is empty");
     }
  }

  min() {
     try {
        return this._stack.slice(-1)[1];
     }
     catch (e) {
        console.error("ERROR: Stack is empty");
     }
  }
}