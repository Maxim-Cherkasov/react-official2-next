//* Responding to Events
// Adding event handlers

// To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag.

// handleClick - is an event handler

/*
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
*/

// Alternatively, you can define an event handler inline in the JSX:
// All of these styles are equivalent. Inline event handlers are convenient for short functions.

/*
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>
Or, more concisely, using an arrow function:

<button onClick={() => {
  alert('You clicked me!');
}}>
*/

//* Reading props in event handlers
// Because event handlers are declared inside of a component, they have access to the component’s props. Here is a button that, when clicked, shows an alert with its message prop:

// This lets these two buttons show different messages. Try changing the messages passed to them.

// Toolbar is a parent component. It passes props (message) and (children) prop. Children is between two tags of <AllertButton>(Play Movie)<AllertButton />

/*
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
*/

//* Passing event handlers as props

// PlayButton passes handlePlayClick as the onClick prop to the Button inside.
// UploadButton passes () => alert('Uploading!') as the onClick prop to the Button inside.
// <Button ... /> component inside these two functions passes onClick props to its childs Button component. Inside {onClick} button uses handlePlayClick function and inline alert("Uploading!") in the second case

/*
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
*/

//* Naming event handler props

/*
function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
*/

/*
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
*/

//* Event propagation Распространение событий

// If you click on either button, its onClick will run first, followed by the parent <div>’s onClick. So two messages will appear. If you click the toolbar itself, only the parent <div>’s onClick will run.

/*
export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
*/

//* Stopping propagation

/*
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
*/

//* Passing handlers as alternative to propagation

/*
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
*/

//* Preventing default behavior

/*
export default function Signup() {
  return (
    <form onSubmit={() => alert("Submitting!")}>
      <input />
      <button>Send</button>
    </form>
  );
}
*/

/*
export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
*/
