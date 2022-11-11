//* Conditional rendering
// https://beta.reactjs.org/learn/conditional-rendering

//* Conditional (ternary) operator (? :)

/*
This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up. In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.
*/

// We can extract child components into variables and functions if there are a lot of conditional markup

//* Logical AND operator (&&)

/*
A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.
*/

/*
Don’t put numbers on the left side of &&.
if the left side is 0, then the whole expression gets that value (0), and React will happily render 0
To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.
*/

//* Challenges

//* Challenge 2 of 3: Show the item importance with &&

// получить "Space suit" + "(Importance {})" в li
// проверим Если ipmtce && "(Importance {importance})"
// здесь связано с поведением && с нулем

/*
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && <i>`(Importance ${importance})`</i>}
    </li>
  );
}
*/

// React docs solution:
// In this solution, two separate conditions are used to insert a space between the name and the importance label.

/*
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && " "}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}
*/

// Alternatively, you could use a fragment with a leading space: importance > 0 && <> <i>...</i></> or add a space immediately inside the <i>:  importance > 0 && <i> ...</i>.

//* Challenge 3 of 3: Refactor a series of ? : to if and variables

/*
This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.
*/

// Refactor this code to use a single if statement instead of three ? : conditions.
// рефакторинг у джонаса, игры

// info based on prop is "tea" or "coffee".
// single if statement
// consciesly take examples, make prototype
// три заголовка разделенные условием

// сделать две разметки с чаем и кофе
// условия из пропсов
// посмотреть деление компонента
// затык в разметке
// два раза разметка писаться не должна
