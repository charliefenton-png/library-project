const myLibrary = [];

function book(title, author, read) {
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


function addBookToLibrary() {
  // take params, create a book then store it in the array
}


let uuid = self.crypto.randomUUID();
console.log(uuid);




const bookOne = document.querySelector("#bookOne");
bookOne.dataset.idnumber;