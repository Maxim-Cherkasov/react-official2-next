// In this example, double is a pure function. If you pass it 3, it will return 6. Always.

function double(number) {
  return 2 * number;
}

// React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:

// здесь поиграл немного с флексом и добавлением jsx "li" при условии isNeed

function Recipe({ drinkers, li, isNeed }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of milk.</li>
      <li>Add {2 * drinkers} spoons of masala spices.</li>
      <li>Remove from heat, and add {drinkers} spoons of tea.</li>
      {isNeed ? li : 2}
    </ol>
  );
}

function App() {
  const par = <li>1</li>;
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <div style={{ display: "flex" }}>
        <div>
          <h2>For one</h2>
          <Recipe drinkers={1} />
        </div>
        <div>
          <h2>For a gathering</h2>
          <Recipe drinkers={4} li={par} isNeed={true} />
        </div>
      </div>
    </section>
  );
}

// You could think of your components as recipes: if you follow them and don’t introduce new ingredients during the cooking process, you will get the same dish every time. That “dish” is the JSX that the component serves to React to render.

export default function PureComponent() {
  return <App />;
}
