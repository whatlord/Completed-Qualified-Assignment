const { partitionBooksByBorrowedStatus } = require("./books");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrows = partitionBooksByBorrowedStatus(books)
  return borrows[0].length
}

function getMostCommonGenres(books) {
  let basic = books.reduce((result, book) => {
    const genre = book.genre;
    (genre in result) ? result[genre] +=1 : result[genre] =1;
    return result;
  },{});
  let ret = []
  Object.keys(basic).forEach(element => {
    ret.push({ name: element, count: basic[element] })
  });
  console.log(ret)
  
  let she = ret.sort((a,b) => {
    return b.count - a.count;
  })
  she.length = 5
  console.log(she)
  return she

}

function getMostPopularBooks(books) {
  return books.map((book) => ({name: book.title, count: book.borrows.length})).sort((a,b) => b.count - a.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let list = authors.map((author) => ({id: author.id, name: `${author.name.first} ${author.name.last}`, count: 0}));
  books.forEach((book) => {
    author = list.find((author) => book.authorId == author.id)
    author.count += book.borrows.length
  })
  return list.map((item) => ({name: item.name, count: item.count})).sort((a,b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
