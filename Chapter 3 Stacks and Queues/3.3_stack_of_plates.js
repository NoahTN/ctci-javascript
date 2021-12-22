/* Pseudo 1
Create stacks set
Create capacity

Push O(1)
   If last stack in set is at capacity, add a new stack with the value  

Pop O(1)
   Remove from last stack
   If last stack is empty
      Delete last stack
   Return popped value
   
PopAt O(n)
   Check if stack index exists
      Pop from stack
      If stack is empty
         Delete stack
      Return popped value
*/

/* Code 1 */
class StackSet {
   constructor(capacity) {
      this._stacks = [];
      this._capacity = capacity;
   }

   push(value) {
      if(this._stacks.length && this._stacks[this._stacks.length-1].length === this._capacity) {
         this._stacks.push([]);
      }
      this._stacks[this._stacks.length-1].push(value);
   }

   pop() {
      try {
         const output = this._stacks[this._stacks.length-1].pop();
         if(!this._stacks[this._stacks.length-1].length) {
            this._stacks.pop();
         }
         return output;
      }
      catch(e) {
         console.error("ERROR: Stack is empty");
      }
   }

   popAt(index) {
      try {
         const output = this._stacks[index].pop();
         if(!this._stacks[index].length) {
            this._stacks.splice(index, 1);
         }
         return output;
      }
      catch(e) {
         if(!this._stacks.length) {
            console.error("ERROR: Stack is empty");
         }
         else {
            console.error("ERROR: Stack at index does not exist");
         }
      }
   }
}