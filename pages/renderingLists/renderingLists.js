import Challenges from "./challenges";

//* Rendering data from arrays
// Theory and examples

// The first formula
// it shows an error bcz it doesn't have id but demonstrate an example of how it works

/*
// 1. Move the data into an array:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function List() {
  // 2. Map the people members into a new array of JSX nodes, listItems:
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  // 3. Return listItems from your component wrapped in a <ul>:
  return <ul>{listItems}</ul>;
}
*/

//* Filtering arrays of items

// It shows an error here too, that's ok
// show only people with chemist profession

// 1. Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':

/*
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

// 2. Now map over chemists:
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

// Lastly, return the listItems from your component:
return <ul>{listItems}</ul>;
*/

//* deviding in to three documents

/*
import { people } from './data.js';
import { getImageUrl } from './utils.js';

 function List() {
  // получем отфильтрованных по строке chemists людей в переменную
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  // делам циклы по этим людям
  // person это объект в people
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
*/

//* Working list

// Important - JSX elements directly inside a map() call always need keys!
// Each child in a list should have a unique “key” prop.

/*
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
*/

export default function RenderingLists() {
  return <Challenges />;
}
