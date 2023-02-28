// But there is a bug. If you move the box first, and then change its color, the background (which isn’t supposed to move!) will “jump” to the box position. 

//* But this should not happen: the Background’s position prop is set to initialPosition, which is { x: 0, y: 0 }. Why is the background moving after the color change?

Background’s position prop is set to initialPosition { x: 0, y: 0 }
Why is the background moving after the color change?
- it can be related with state, becuse Box changes initialPosition somehow

It seems the problem is here:
This func mutates state and it's not allowed:

function handleMove(dx, dy) {
  shape.position.x += dx;
  shape.position.y += dy;
}


export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      shape: position.x += dx;
      shape: position.y += dy;
    });
  }

  function handleMove(dx, dy) {
    setPerson({
      ...shape,
      initialPosition: {
        ...initialPosition.x,
        initialPosition.x += dx;
        initialPosition.y += dy;
      }
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
  }

  //* -----

  const initialPosition = {
    x: 0,
    y: 0
  };
  
  export default function Canvas() {
    const [shape, setShape] = useState({
      color: 'orange',
      position: initialPosition
    });
  
    function handleMove(dx, dy) {
      shape.position.x += dx;
      shape.position.y += dy;
    }
  



    function handleColorChange(e) {
      setShape({
        ...shape,
        position: {
          ...shape.initialPosition,
          x: initialPosition.x += dx;
          y: initialPosition.y += dy;
        }
      });
    }



    function handleCityChange(e) {
      setPerson({
        ...person,
        artwork: {
          ...person.artwork,
          city: e.target.value
        }
      });
    }

    you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:

const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);

Or, written as a single function call:

setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});

const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

produce the new artwork object
hen produce the new person object which points at the new artwork:

const nextArtwork = { ...person.artwork, city: 'New Delhi' };
//* breaking down a component step by step

what is children here

import { useState } from "react";

export default function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
}

//* Challenge 3 of 3: Update an object with Immer

//This is the same buggy example as in the previous challenge. This time, fix the mutation by using Immer. For your convenience, useImmer is already imported, so you need to change the shape state variable to use it.

import { useImmer } from "use-immer";
import style from "./challenges.module.css";
import { useState } from "react";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape(draft => {
      draft.position.x + dx,
      draft.position.y + dy,
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <div>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </div>
  );
}

import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  updatePerson(draft => {
    draft.artwork.city = 'Lagos';
  });

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}


updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});