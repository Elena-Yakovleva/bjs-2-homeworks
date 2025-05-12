class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      if ((this.state * 1.5 > 100)? (this.state = 100) : (this.state *= 1.5));
   }

   set state(value) {
      if (value < 0 ) {
         this._state = 0;
      }
      if (value > 100) {
         this._state = 100;
      }
      this._state = value;
   }

   get state() {
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.author = author;
     this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount,);
     this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = "detective";
   }
}

class Library {
   constructor(name, books) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      this.books.push(book);
   }

   findBookBy(type, value) {
      if(this.books.find(book => book[type] === value)) {
         return this.books.find(book => book[type] === value);
      }
      return null;
   }

   giveBookByName(bookName) {
      let index = this.books.findIndex(books => books.name === bookName);
      if (index !== -1) {
         return this.books.splice(index, 1)[0];
      }
      return null;
   }
}

// Задача 3

class Student {

   constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
   }

   marks = {};

   addMark(mark, subject) {
      if ( mark < 3 || mark > 5) {
         return;
      }

      if (this.marks.hasOwnProperty(subject) === false) {
         this.marks[subject] = [];
      }

      this.marks[subject].push(mark);
   }

   getAverageBySubject(subject) {
      if (this.marks.hasOwnProperty(subject) === false) {
         return 0;
      }
      return this.marks[subject].reduce((acc, item, i, arr) => acc + item / arr.length, 0);
   }

   getAverage() {
      if (Object.keys(this.marks).length === 0) {
         return 0;
      }

      let sum = 0;
      let counter = 0;
      for (let key of Object.keys(this.marks)) {
         sum += this.marks[key].reduce((acc, item) => acc += item, 0);
         counter += this.marks[key].length;
      }
      return sum / counter;
   }

}