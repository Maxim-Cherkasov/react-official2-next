//* Challenge 1 of 4: Splitting a list in two

// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

// two separate lists
// chemists and everyone else
// chemists and not chemists

/*
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
*/

//* Challenge 2 of 4: Nested lists in one component

// Make a list of recipes from this array! For each recipe in the array, display its title as an <h2> and list its ingredients in a <ul>.

/*
import { recipes } from "./data-recipes.js";

// Исходные данные
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}
*/

//* my try

/*
export const recipes = [
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

const listItems = recipes.map((rec) => <li key={rec.id}>{rec}</li>);

<ul>{listItems}</ul>;
*/

//* solution and my description

// array item (obj) = id

// jsx elements DIRECTLY inside a map() call always need keys!

// Важно обратить внимание, что первый jsx элемент (здесь это div) внутри вызова map() всегда должен иметь ключ key={...}

// Ключи сообщают реакту, какой объект из массива recipies используется в этом jsx элементе div. Так, реакт сможет точно определять происхождение этого объекта, даже если потом ты изменишь порядок отображения объектов из этого массива.

// the 1st element in the map call always need a key

// keys tell React which array item (obj here) each component corresponds to, so that it can match them up later.

/*
function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      // 3 objs - 3 iterations
      {recipes.map((recipe) => (
        // uniquely identifies key - the obj
        // each div component here corresponds to an object in recipes array
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            // 3 iterations - 3 ul
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
*/

// JSX elements directly inside a map() call always need keys!

// Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

/*
import { recipes } from "./data-recipes.js";

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      // 3 объекта - 3 итерации
      {recipes.map((recipe) => (
        // первый jsx элемент в функции мап
        // долен иметь ключ соответствуюший id объекта
        // из массива recipes
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            // 3 итерации - 3 ul
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
*/

//* Challenge 3 of 4: Extracting a list item component

// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

/*
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => // 1st map call
        <div key={recipe.id}> // recipe component
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => // 2nd map call
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
*/

//* Solution

// You can copy-paste the JSX from the outer map into a new Recipe component and return that JSX. Then you can change recipe.name to name, recipe.id to id, and so on, and pass them as props to the Recipe:

// Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying “pass all properties of the recipe object as props to the Recipe component”. You could also write each prop explicitly: <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />.

// Note that the key is specified on the <Recipe> itself rather than on the root <div> returned from Recipe. This is because this key is needed directly within the context of the surrounding array. Previously, you had an array of <div>s so each of them needed a key, but now you have an array of <Recipe>s. In other words, when you extract a component, don’t forget to leave the key outside the JSX you copy and paste.

/*
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}
*/

//* Challenge 4 of 4: List with a separator

// This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

// You’ll either need to convert map to a manual loop, or use a fragment.

// (This is a rare case where index as a key is acceptable because a poem’s lines will never reorder.)

<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>;

// A haiku only contains three lines, but your solution should work with any number of lines. Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
}

// Your job is to insert an <hr /> separator between each paragraph.
// solution should work with any number of lines
// <hr /> elements only appear between the <p> elements, not in the beginning or the end!

// see solution with push
// after 1st and 2nd iteration add hr
// logic in jsx
// research > conclusion > plan

// string check logic
// if 1st two lines true return push hr
// foreach and pass vars as props
// adopt foreach
// pass as props

//* Solution 4.1

//* Using the original line index as a key doesn’t work anymore because each separator and paragraph are now in the same array. However, you can give each of them a distinct key using a suffix, e.g. key={i + '-text'}.

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

//* Solution 4.2

// Alternatively, you could render a collection of fragments which contain <hr /> and <p>...</p>. However, the <>...</> shorthand syntax doesn’t support passing keys, so you’d have to write <Fragment> explicitly:

// Remember, fragments (often written as <> </>) let you group JSX nodes without adding extra <div>s!

import React, { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}
