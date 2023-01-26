//* Challenge 1 of 2: Fix an event handler

// Clicking this button is supposed to switch the page background between white and black. However, nothing happens when you click it. Fix the problem. (Don’t worry about the logic inside handleClick—that part is fine.)

// solution: i needed to delete () in button

/*
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>;
}
*/

// Alternatively, you could wrap the call into another function, like <button onClick={() => handleClick()}>:

/*
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={() => handleClick()}>
      Toggle the lights
    </button>
  );
}
*/

//* Challenge 2 of 2: Wire up the events

// This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.

// After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that onChangeColor does not increment any counters. What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.

// The onChangeColor is in main.js in this folder
// so we include its functionality through the call of it here

/*
export default function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}
*/
