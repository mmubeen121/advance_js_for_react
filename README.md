# Advanced JavaScript For React

Welcome to the ** Advanced JS for React** learning repository! This file serves as a comprehensive cheatsheet and guide for the foundational modern JavaScript concepts required to master React development.

---

## 📌 Table of Contents

1. [Destructuring (Arrays & Objects)](https://www.google.com/search?q=%231-destructuring-arrays--objects)
2. [Rest & Spread Operators](https://www.google.com/search?q=%232-rest--spread-operators)
3. [Arrow Functions](https://www.google.com/search?q=%233-arrow-functions)
4. [Ternary Operator](https://www.google.com/search?q=%234-ternary-operator)
5. [Essential Array Methods](https://www.google.com/search?q=%235-essential-array-methods)
6. [Immutability (Don't Mutate Data)](https://www.google.com/search?q=%236-immutability-dont-mutate-data)
7. [Asynchronous JavaScript (Promises & Async/Await)](https://www.google.com/search?q=%237-asynchronous-javascript-promises--asyncawait)

---

## 1. Destructuring (Arrays & Objects)

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables quickly.

### Array Destructuring

Extract items sequentially from an array based on their position.

```javascript
const [movie1, movie2, movie3] = data;
console.log(movie1); // Outputs the first object in the data array

```

### Object Destructuring

Extract values using the property names directly.

```javascript
const userProfile = {
  name: 'Mubeen',
  age: 20,
  email: 'mubeen@gmail.com',
  password: '1234@1234'
};

const { name, email, password } = userProfile;
console.log(email); // 'mubeen@gmail.com'

```

---

## 2. Rest & Spread Operators

Both syntax patterns use triple dots (`...`), but they serve opposite purposes.

### Rest Operator

Collects multiple remaining elements into a single array.

```javascript
const colors = ['red', 'blue', 'orange', 'yellow', 'green'];
const [col1, col2, ...rest] = colors;

console.log(rest); // ['orange', 'yellow', 'green']

```

### Spread Operator

Unpacks elements from an array or object. It is heavily used to merge or shallow-copy structures.

```javascript
// Merging and adding to Arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2]; // [1, 2, 3, 4, 5, 6]

// Merging and updating Objects
const userInfo = { name: 'Mubeen', role: 'Developer' };
const userLogData = { email: 'mubeen@gmail.com' };

const fullProfile = { 
  ...userInfo, 
  ...userLogData, 
  role: 'Senior Developer' // Updates existing 'role' property
};

```

---

## 3. Arrow Functions

Provides a shorter syntax for writing function expressions.

```javascript
// Normal function
function myfunc() {}

// Arrow function (implicit or explicit return)
const hello = (name) => `Hello ${name}`;
console.log(hello('Mubeen'));

```

---

## 4. Ternary Operator

A short-hand alternative to `if/else` statements, widely utilized inside React JSX for conditional rendering.

```javascript
const myname = 'Mubeen';
const greeting = myname === 'Mubeen' ? 'Hello Mubeen' : 'Sorry Not allowed';

```

---

## 5. Essential Array Methods

These high-order array functions help manipulate lists without altering the original references.

### `map()`

Transforms every single element in an array and returns a **new array**.

```javascript
const oddNumbers = [1, 3, 5];
const doubled = oddNumbers.map((num) => num * 2); // [2, 6, 10]

```

### `filter()`

Filters down an array based on a boolean conditional check.

```javascript
const adventureBooks = books.filter((book) => book.genres.includes('adventure'));

```

### `reduce()`

Reduces a whole array down to a single value (e.g., tallying sums).

```javascript
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);

```

### `sort()`

Sorts arrays. **Note:** `sort()` modifies the original array, so use `.slice()` first to create a copy before sorting!

```javascript
const sortedBooksByPages = books.slice().sort((a, b) => a.pages - b.pages);

```

---

## 6. Immutability (Don't Mutate Data)

In React, state should never be modified directly. Always generate new instances instead of modifying old arrays or objects.

```javascript
const newBook = { id: 6, title: "The Wonderfools", publicationDate: "2026-05-01" };

// Safe: Creates an entirely fresh dataset array
const updatedData = [...data, newBook]; 

```

---

## 7. Asynchronous JavaScript (Promises & Async/Await)

Handles operations that take time to complete, such as network requests.

### Method 1: Promises (`.then()` / `.catch()`)

```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

```

### Method 2: Async/Await (Cleaner, synchronous-looking format)

```javascript
async function fetchUserData() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

```

### Parallel Execution with `Promise.all`

Triggers multiple asynchronous jobs at once and responds when all are finished or if any fail.

```javascript
let orderPizza = new Promise((resolve) => setTimeout(() => resolve('Pizza Ready!'), 2000));
let processPayment = new Promise((_, reject) => reject("Error: Insufficient funds"));

Promise.all([orderPizza, processPayment])
  .then((messages) => console.log(messages))
  .catch((error) => console.log(error)); // Will catch the payment error immediately

```
