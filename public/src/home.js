//const { findAuthorById } = require("./books");

function getTotalBooksCount(books) {
  //return Object.keys(books).length;
  return books.reduce((total) => {
    total++;
    return total;
  }, 0);
}

function getTotalAccountsCount(accounts) {
  return Object.keys(accounts).length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;

     books.filter((book) => {
      let status = book.borrows[0].returned
      if (status === false) return borrowedBooks++;
    })
    return borrowedBooks;
}

function getMostCommonGenres(books) {
/*reults = [{
  name: "Genre",
  count: number of times"
}]
*/
//Create an empty object to store a genre counter
const genreCounter = {}
//Iterate through books array to test if the create object contain any genre values
const container = books.forEach((book) => {
  (genreCounter[book.genre] != null) ? genreCounter[book.genre]++: genreCounter[book.genre] = 1;
})

//Access the genreCounter to reshape it into an array with the required properties,
//sorted and sliced to only include the top 5 values.
return Object.keys(genreCounter).map((genre) => 
({name: genre, count: genreCounter[genre]})).sort((valueA, valueB) => 
valueB.count - valueA.count).slice(0,5);

}

function getMostPopularBooks(books) {
  /*result = [
    {name: "name", count: "count"},
    {name: "name", count: "count"},
    ...
  ]
  */
  return books.map((book) => 
  ({name: book.title, count: book.borrows.length})).sort((valueA, valueB) =>
    valueB.count - valueA.count).slice(0,5);
}



function getMostPopularAuthors(books, authors) {
  //result = {authorID: counter}
  // {"30": 3}
  //Counter for books, outputs the author id and count
  const authorCount = books.reduce((acc, {authorId, borrows = []}) => {
    //{key = accumulator + number of length of borrows}
    acc[authorId] = (acc[authorId] || 0) + borrows.length;
    return acc;
},{})

//Remapping the authors array while getting the author name and 
//matching the author id with authorCount id
  return authors.map((author) => { 
   let authorName = `${author.name.first} ${author.name.last}`
  return ({name:authorName, count: authorCount[author.id]})
}).sort((valueA, valueB) => valueB.count - valueA.count).slice(0,5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
