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
