// Advance JS For React
// 01 Destructuring Array and Object

// Suppose we have this data now we want to get what we want instead of printing the whole object we will use destructuring means assigning to a variable the object value that we want
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// destructuring Array
const [movie1, movie2, movie3] = data
console.log(movie1)

// detsrtucturing an object in JS
const userProfile = {
  name:'Mubeen',
  age:20,
  email:'mubeen@gmail.com',
  password:'1234@1234'
}

const {name, email, password} = userProfile
console.log(email)

// Rest operator & spread operator
// Rest operator
const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'pink', 'black', 'white']
const [col1,col2,...rest] = colors
console.log(...rest)

// spread operator use to merge two array or object or to update a value in array or in object
const newColors = [...colors, 'gray', 'brown'];
console.log(newColors)
const numbers1 = [1,2,3,4,5]
const numbers2 = [6,7,8,9,10]
// merging array using spread operator
const numbers = [...numbers1, ...numbers2]
console.log(numbers) 
// spread operator in object
const userInfo = {name:'Mubeen', role:'Developer'};
const userlogdata = {email:'mubeen@gmail.com', passowrd:'12345678'};
const fullProfile = { 
  ...userInfo, 
  ...userlogdata, 
  role: 'Senior Developer'
};
console.log(fullProfile);

// Arrow function
// normal function
function myfunc(){
// block of code]
};
// arrow function
const hello = (name) => {
  return `Hello ${name}`;
};
console.log(hello('Mubeen'))

// ternary operator
const myname = 'Mubeen';
const greeting = myname === 'Mubeen' ? 'Hello Mubeen' : 'Sorry Not allowed';
console.log(greeting);

// Array mEthods map(), filter(), reduce()
// map() work on each item of an array and return a new array means it will not mutate the orignal array
const oddNumbers = [1,3,5,7,9,11,13];
// let see with loop first and than will apply map() method
const numbers4 = [];
for (let i = 0; i < oddNumbers.length; i++){
  numbers4.push(oddNumbers[i]  * 2);
}
console.log(numbers4) // [2, 6, 10, 14, 18, 22, 26];
// Now let's do with map() method
const numbers5 = oddNumbers.map((num) => num * 2);
console.log(numbers5);
function getBooks() {
  return data;
}
const books = getBooks();
 const titles = books.map((book) => book.title);
 console.log(titles);
 const author = books.map((book) => ({
  name: book.author,
 }));
  console.log(author);
// Filter Method used to order filter out array based on a condition and return a new array
const Booksid = books.filter((book) => book.id === 1);
console.log(Booksid);

const adventuresbooks = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);
console.log(adventuresbooks);

// Reduce Method used to reduce an array to a single value
const allpages = books.reduce((acc, book)=> acc + book.pages, 0);
console.log(allpages);

// sort method to sort an array
const y = [3,2,1,5,4,7,6,9,8];
const sorted_y = y.sort((a,b) => a - b);
console.log(sorted_y);
console.log(y);

const sort_books = books.slice().sort((a,b) => a.pages - b.pages).map((book) => book.pages);;
console.log(sort_books);

// Don't Mutate the Original Array
const newbook = {
  id:6,
  title:"The Wonderfools",
  publicationDate:"2026-05-01",
};
 const updatedData = [...data, newbook];
console.log(updatedData); 