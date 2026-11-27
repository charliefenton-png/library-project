const myLibrary = [];

function Book(title, author, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.read = read
  this.sayBook = function() {
    console.log(this.title, this.author, this.read);
  };
}

let bookOne = new Book("Game of Thrones", "George R. R. Martin", "read");

function addBookToLibrary(books, title, author, read) {
  myLibrary.push({title, author, read});
  return books;
}

 myLibrary.push(bookOne);
  console.log(myLibrary);


let uuid = self.crypto.randomUUID();
console.log(uuid);

bookOne.sayBook() 


// const bookOne = document.querySelector("#bookOne"); //
// bookOne.dataset.idnumber; "7dcab080-56db-471e-a2d2-261d3c8b6d55"





const moreBooks = ["Critique of Pure Reason", "Immanuel Kant", "read"];
console.log(addBookToLibrary(moreBooks)); 