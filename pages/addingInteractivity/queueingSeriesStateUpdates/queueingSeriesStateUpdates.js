//* React batches state updates

// Here the value of number inside the first render’s event handler is always 0, no matter how many times

// React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.

/*
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
*/

//* Updating the same state variable multiple times before the next render

// you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(n => n + 1). It is a way to tell React to “do something with the state value” instead of just replacing it.

// Here, n => n + 1 is called an updater function. When you pass it to a state setter:

// 1. React queues this function to be processed after all the other code in the event handler has run.

// 2. During the next render, React goes through the queue and gives you the final updated state.

/*
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
*/

//* What happens if you update state after replacing it

// What about this event handler? What do you think number will be in the next render?

// setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.
// setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue.
// During the next render, React goes through the state queue:

/*
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>
    </>
  );
}
*/

//* What happens if you replace state after updating it

// Here’s how React works through these lines of code while executing this event handler:

// 1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.
// 2. setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue.
// 3. setNumber(42): React adds “replace with 42” to its queue.

// a. An updater function (e.g. n => n + 1) gets added to the queue.
// b. Any other value (e.g. number 5) adds “replace with 5” to the queue, ignoring what’s already queued.

/*
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
}
*/

//* Challenges import

//* Task 1

/*
import { RequestTracker } from "./challenges";

export default function Challenges(params) {
  return <RequestTracker />;
}
*/

//* Task 2

import App from "./challenges";

export default function Challenges(params) {
  return <App />;
}
