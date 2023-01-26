//* Responding to Events
// Adding event handlers

/*
  You can make it show a message when a user clicks by following these three steps:

  1. Declare a function called handleClick inside your Button component.
  2. Implement the logic inside that function (use alert to show the message).
  3. Add onClick={handleClick} to the <button> JSX.
*/

//* Challenge 2 of 2: Wire up the events

//? This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.

//? After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that onChangeColor does not increment any counters. What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.
