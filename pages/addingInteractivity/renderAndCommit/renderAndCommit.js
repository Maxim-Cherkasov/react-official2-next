//* Render and Commit
// Before your components are displayed on screen, they must be rendered by React.

/*
  1. Triggering a render (delivering the guest’s order to the kitchen)
  2. Rendering the component (preparing the order in the kitchen)
  3. Committing to the DOM (placing the order on the table)
*/

//* Step 1: Trigger a render
//* Initial render

/*
  When your app starts, you need to trigger the initial render. 
  Frameworks and sandboxes sometimes hide this code, but it’s done by calling createRoot with the target DOM node, and then calling its render method with your component:

  import Image from './Image.js';
  import { createRoot } from 'react-dom/client';

  const root = createRoot(document.getElementById('root'))
   root.render(<Image />);
*/

/*
  As if file.js one:

  import Image from './Image.js';
  import { createRoot } from 'react-dom/client';

  const root = createRoot(document.getElementById('root'))
  root.render(<Image />);

  As if file.js two:

  export default function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
*/

//* Re-renders when state updates

/*
  Once the component has been initially rendered, you can trigger further renders by updating its state with the set function. Updating your component’s state automatically queues a render. (You can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)
*/

/*
  1. State update...
React returns to the Component Kitchen and tells the Card Chef they need a pink Card.
  2. ...triggers...
The Card Chef gives React the pink Card.
  3 ...render!
*/

//* Step 2: React renders your components

/*
  After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.
*/

/*
  On initial render, React will call the root component.
  For subsequent renders, React will call the function component whose state update triggered the render.
*/

/*
  This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

  In the following example, React will call Gallery() and  Image() several times:
*/

/*
export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
*/

//* Step 3: React commits changes to the DOM

/*
  For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
  For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
  React only changes the DOM nodes if there’s a difference between renders. For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the <input>, updating its value, but the text doesn’t disappear when the component re-renders:
*/

/*
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
*/
