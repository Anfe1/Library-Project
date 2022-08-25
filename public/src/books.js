function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
  
function partitionBooksByBorrowedStatus(books) {
  const statusTrue = []
  const statusFalse = []
    
      books.filter((book) => {
        let status = book.borrows[0].returned
        status === true ? statusTrue.push(book) : statusFalse.push(book);
    });
     return [[...statusFalse], [...statusTrue]];
    
}

function getBorrowersForBook(book, accounts) {
  const result = [];
  accounts.forEach((account) =>{
    book.borrows.forEach((singleBook) => {
      account.returned = singleBook.returned;
      if(singleBook.id === account.id) result.push(account);
    })
  })
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
