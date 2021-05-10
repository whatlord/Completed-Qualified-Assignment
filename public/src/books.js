function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  return [books.filter((book) => !book.borrows[0].returned), books.filter((book) => book.borrows[0].returned)]
}

function getBorrowersForBook(book, accounts) {
  const ids = book.borrows.map((borrow) => borrow.id)
  //filter accounts to only have accounts that exist in book.borrows
  const bet = accounts.filter((account) => ids.includes(account.id))

  //return an array of objects where each object contains the account that borrowed a certain book and the returned status from book.borrows
  let counter = 0;
  return bet.map((be) => {
    const borrow = book.borrows[counter]
    counter++
    return {...borrow, ...be}
  });
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
