// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let total = 0;
  function count() {
    console.log(++total);
  }

  return count;
};

let newCounter = counter();
newCounter();
newCounter();
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let total = 0
  return {
    increment: () => {
      return ++total;
    },
    decrement: () => {
      return --total;
    }
  }
}
let counting = counterFactory();
console.log(counting.increment());
console.log(counting.decrement());