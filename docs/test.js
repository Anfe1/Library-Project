const books = [
{
    "id": "5f4471327864ee880caf5afc",
    "title": "reprehenderit quis laboris adipisicing et",
    "genre": "Poetry",
    "authorId": 20,
    "borrows": [
      {
        "id": "5f446f2e2a4fcd687493a775",
        "returned": false
      },
      {
        "id": "5f446f2ebe8314bcec531cc5",
        "returned": true
      },
      {
        "id": "5f446f2ea508b6a99c3e42c6",
        "returned": true
      }
    ]
  }
]

const book =
{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}



const accounts = [
    {
        "id": "5f446f2ecfaf0310387c9603",
        "name": {
          "first": "Esther",
          "last": "Tucker"
        },
        "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
        "age": 25,
        "company": "ZILLACON",
        "email": "esther.tucker@zillacon.me",
        "registered": "Thursday, May 28, 2015 2:51 PM"
      }
]

const account =
{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}



function getTotalNumberOfBorrows(account, books) {
    //get the total borrow count
    //I need to match the account id with the book id and serach the
    //book object for number of borrows.
    const accountId = account[id];
    const bookBorrowId = books[borrows.id]
    console.log(accountId)
    console.log(bookBorrowId)
  }

  //getTotalNumberOfBorrows(accounts, books);


  function partitionBooksByBorrowedStatus(books) {
    let test = accounts.filter((account) => {
      return book.borrows.find((book) => {
        account.returned = book.returned;
        return loneBook.id === account.id
      })
    })
  }


  function getBorrowersForBook(book, accounts) {
    let partionBooks = partitionBooksByBorrowedStatus(books);
    //  let test = [];

    // let result = accounts.filter((account) => { 
    //   if (account.length <= 10)
    //   book.borrows.find((singleBook) => 
    //   singleBook.id === account.id ? test.push(account) : false)
    // })
    

    // console.log(test);
    
  } 

//   function getTotalNumberOfBorrows(account, books) {
//     let result = books.filter((book) => {
//      console.log(book.borrows.id)
//     })
//     console.log(result);
//  };


function getTotalNumberOfBorrows(account, books) {
  //Item in this case item is the iterator and total is the accumulated
  
  const accountId = account.id

  const result = books.forEach(book => {
    let borrowArr = book.borrows;
    borrowArr.find(borrowed => {
    borrowed.id === account.id})})

  return console.log(result)
};

getTotalNumberOfBorrows(account, books)