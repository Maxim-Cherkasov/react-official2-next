import Challenges from "./challenges";

//* Conditionally returning JSX

// PackingList component rendering several Items, which can be marked as packed or not

/*
function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✔" : name}</li>;

  // or

  //if (isPacked) return <li className="item">{name} ✔</li>;

  // or

  //return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

//* Conditionally returning nothing with null

// If we don't want to render anything except for isTrue.
// If isPacked is true, the component will return nothing, null. Otherwise, it will return JSX to render.

/*
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

//* Conditional (ternary) operator (? :)

// A compact syntax for writing a conditional expression
// Wraping item’s text into another HTML tag <del> to strike it out

/*
function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

//* Logical AND operator (&&)

// Rendering some JSX when the condition is true, or nothing otherwise.
// “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.

/*
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

//* Conditionally assigning JSX to a variable

// Adding name prop to itemContent variable
/*
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return <li className="item">{itemContent}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

// Adding JSX to itemContent variable

/*
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
*/

//* Components export

export default function Cr() {
  return (
    <div>
      <Challenges />
    </div>
  );
}
