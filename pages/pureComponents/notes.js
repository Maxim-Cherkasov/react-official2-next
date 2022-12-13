//* Keeping Components Pure

// How to keep components pure by keeping changes out of the render phase
// How to use Strict Mode to find mistakes in your components

//* A pure function is
// It minds its own business. It does not change any objects or variables that existed before it was called
// Same inputs, same output. Given the same inputs, a pure function should always return the same result.

// example of a pure function
function double(number) {
  return 2 * number;
}

// In the above example, double is a pure function. If you pass it 3, it will return 6. Always.
