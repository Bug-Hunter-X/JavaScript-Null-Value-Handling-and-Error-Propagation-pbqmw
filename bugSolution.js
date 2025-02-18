function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

let result = foo(1, 2);
console.log(result); // Output: 3

result = foo(null, 2);
if (result === null) {
  console.log('Error: One or both inputs are null.');
} 

result = foo(1, null);
if (result === null) {
  console.log('Error: One or both inputs are null.');
}

result = foo(null, null);
if (result === null) {
  console.log('Error: One or both inputs are null.');
} 