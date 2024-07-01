// console.log("script 1 loaded")

// //define a function
// function greet(name){
//     // return "Hello " + name;
//     return `Hello ${name}`;
// }

//  console.log(greet("User"));

//  //call back function
//  function processUserInput(cb){
//     const name = prompt("please enter your name")
//     cb(name); }

// //function greetuser(name){console.log(`Hello ${name}`) ;}
//  processUserInput((name)=>console.log(`HELLO ${name}`));

//Array methods
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      rating: 4.5,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      rating: 5.0,
    },
    { title: "1984", author: "George Orwell", year: 1949, rating: 4.8 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, rating: 3.9 },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869, rating: 4.3 },
  ];

  //foreach
  console.log("using foreach")
  books.forEach((book)=>{
    console.log(`${book.title} by ${book.author}`);})
//Map
console.log("using map")
const titles= books.map((book)=> book.title);
console.log(titles)

//filter
console.log("using filter")
const rating = books.filter((book)=> book.rating > 4.5);
console.log(rating)

//find //checks data type and value both
console.log("using find")
const book = books.find((book)=> book.title == "1984");
console.log(book)