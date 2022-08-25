let find = require("./books.js");

function findAccountById(accounts, id) {
  //returns object with matching id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sorts account array by last name
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let result = 0;
  books.forEach(book => book.borrows.forEach(borrow => 
    accountId === borrow.id && result++));
    return result;
  
};

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];

   books.forEach(book => {
    //Isolate the author for a specific book
    let specificAuthor = find.findAuthorById(authors, book.authorId)
    //authors.find(author => author.id === book.authorId);
    //Add the author Object to the specific Book object
    book.author = {...specificAuthor}
    //Find the books with matching borrowed id and account id aswell as the non returned books
    book.borrows.find((borrowed) => {
      //Then pushe that specific book to the array.
     if (borrowed.id === account.id && borrowed.returned == false) return booksPossessed.push(book);
    })
  })

  return booksPossessed;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
