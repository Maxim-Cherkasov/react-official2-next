//* Setting state triggers renders

// In this example, when you press “send”, setIsSent(true) tells React to re-render the UI:

// Here’s what happens when you click the button:

/*
  The onSubmit event handler executes.
  setIsSent(true) sets isSent to true and queues a new render.
  React re-renders the component according to the new isSent value
*/

/*
import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}
*/
//* Rendering takes a snapshot in time

// “Rendering” means that React is calling your component, which is a function.

/*
  Notice that number only increments once per click!

  Setting state only changes it for the next render. During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after setNumber(number + 1) was called.

  This is why clicking the button again will set the counter to 2, then to 3 on the next click, and so on.
*/

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

//* State over time

//  the alert shows “0”:

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
          alert(number);
        }}
      >
        +5
      </button>
    </>
  );
}
*/

// But what if you put a timer on the alert, so it only fires after the component re-rendered? Would it say “0” or “5”? Have a guess!

// Surprised? If you use the substitution method, you can see the “snapshot” of the state passed to the alert.

// The state stored in React may have changed by the time the alert runs, but it was scheduled using a snapshot of the state at the time the user interacted with it!

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
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
*/

/*
  You press the “Send” button, sending “Hello” to Alice.
  Before the five-second delay ends, you change the value of the “To” field to “Bob”.
  What do you expect the alert to display? Would it display, “You said Hello to Alice”? Or would it display, “You said Hello to Bob”? Make a guess based on what you know, and then try it:
*/

/*
import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
*/

//* Challenge 1 of 1: Implement a traffic light

// since in this section one challenge i put it here

// Here is a crosswalk light component that toggles on when the button is pressed:

// Add an alert to the click handler. When the light is green and says “Walk”, clicking the button should say “Stop is next”. When the light is red and says “Stop”, clicking the button should say “Walk is next”.

// Does it make a difference whether you put the alert before or after the setWalk call?

//* My solution

/*
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    if (!walk) {
      alert("Walk is next");
    } else {
      alert("Stop is next");
    }
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
*/

//* Docs solution

/*
  Whether you put it before or after the setWalk call makes no difference. That render’s value of walk is fixed. Calling setWalk will only change it for the next render, but will not affect the event handler from the previous render.
*/

/*
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
*/
