//* Challenge 1 of 2: Fix a request counter

// You’re working on an art marketplace app that lets the user submit multiple orders for an art item at the same time. Each time the user presses the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.

// However, the “Pending” counter does not behave as intended. When you press “Buy”, it decreases to -1 (which should not be possible!). And if you click fast twice, both counters seem to behave unpredictably.

// Why does this happen? Fix both counters.

//* Каждый раз, когда пользователь нажимает кнопку "Купить", счетчик "Отложенные" должен увеличиваться на единицу. Через три секунды счетчик "Отложенные" должен уменьшиться, а счетчик "Выполненные" - увеличиться.

//* Однако счетчик "Pending" ведет себя не так, как задумано. Когда вы нажимаете "Купить", он уменьшается до -1 (что не должно быть возможным!). А если дважды нажать кнопку "Быстро", то оба счетчика ведут себя непредсказуемо.

import { useState } from "react";

export function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//* Docs solution

// Inside the handleClick event handler, the values of pending and completed correspond to what they were at the time of the click event. For the first render, pending was 0, so setPending(pending - 1) becomes setPending(-1), which is wrong. Since you want to increment or decrement the counters, rather than set them to a concrete value determined during the click, you can instead pass the updater functions:

// Внутри обработчика события handleClick значения pending и completed соответствуют тому, какими они были во время события click. Для первого рендера значение pending было равно 0, поэтому setPending(pending - 1) становится setPending(-1), что неправильно. Поскольку вы хотите увеличивать или уменьшать счетчики, а не устанавливать их в конкретное значение, определенное во время щелчка, вы можете вместо этого передать функции обновления:

// This ensures that when you increment or decrement a counter, you do it in relation to its latest state rather than what the state was at the time of the click.

// Это гарантирует, что когда вы увеличиваете или уменьшаете счетчик, вы делаете это по отношению к его последнему состоянию, а не к состоянию на момент щелчка.

import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//* Challenge 2 of 2: Implement the state queue yourself

// In this challenge, you will reimplement a tiny part of React from scratch! It’s not as hard as it sounds.

// Scroll through the sandbox preview. Notice that it shows four test cases. They correspond to the examples you’ve seen earlier on this page. Your task is to implement the getFinalState function so that it returns the correct result for each of those cases. If you implement it correctly, all four tests should pass.

// You will receive two arguments: baseState is the initial state (like 0), and the queue is an array which contains a mix of numbers (like 5) and updater functions (like n => n + 1) in the order they were added.

// Your task is to return the final state, just like the tables on this page show!

// Your task is to implement the getFinalState function so that it returns the correct result for each of those cases. If you implement it correctly, all four tests should pass.

//* processQueue.js

export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // do something with the queue...

  return finalState;
}

//* App.js

import { getFinalState } from './processQueue.js';

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}

//* Docs solution

export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }

  return finalState;
}
