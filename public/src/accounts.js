function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const aName = a.name.last.toUpperCase();
    const bName = b.name.last.toUpperCase();
  
    let comparison = 0;
    if (aName > bName) {
      comparison = 1;
    } else if (aName < bName) {
      comparison = -1;
    }
    return comparison;
  });
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach((book) => {
    const borrows = book.borrows;
    borrows.forEach((borrow) => {
      if(borrow.id == account.id)
        count++;
    })
  })
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    //somework to keep book or not
    console.log(!(book.borrows[0].returned) && (book.borrows[0].id == account.id))
    return (!(book.borrows[0].returned) && (book.borrows[0].id == account.id));
  }).map((book) => {
    //return book object with author attribute
    const author = authors.find((auth) => book.authorId == auth.id)
    return {...book, author: author};
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
