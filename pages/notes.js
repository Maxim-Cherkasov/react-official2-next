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


