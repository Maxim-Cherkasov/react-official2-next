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