// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

// two separate lists
// chemists and everyone

import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

//* Filtering arrays of items

// It shows an error here too, that's ok
// show only people with chemist profession

// 1. Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':

const chemists = people.filter((person) => person.profession === "chemist");

// 2. Now map over chemists:
const listItems = chemists.map((person) => (
  <li>
    <img src={getImageUrl(person)} alt={person.name} />
    <p>
      <b>{person.name}:</b>
      {" " + person.profession + " "}
      known for {person.accomplishment}
    </p>
  </li>
));

// Lastly, return the listItems from your component:
return <ul>{listItems}</ul>;

//* deviding in to three documents

import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function List() {
  // получем отфильтрованных по строке chemists людей в переменную
  const chemists = people.filter((person) => person.profession === "chemist");
  // делам циклы по этим людям
  // person это объект в people
  const listItems = chemists.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

// в этой последней функции list мы получаем всех химиков
// остается сделать функцию, которая выводит всех остальных
// попробовать через != "chemist
// подставить key в сортировочной функции
