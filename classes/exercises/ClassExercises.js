// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts=0, discarded="No") {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckouts = numCheckouts;
        this.discarded = discarded;
    }

    checkout() {
        this.numCheckouts++;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }

    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = "Yes";
        }
    }
}

class Novel extends Book {
    constructor(author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }

    dispose() {
        if (this.numCheckouts > 100) {
            this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let myManual = new Manual("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32);

let myNovel = new Novel("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1)


// Code exercises 4 & 5 here:

console.log(myManual);
console.log(myNovel);

myManual.checkout();
myManual.dispose(2024);
console.log(myManual);

myNovel.checkout();
myNovel.dispose();
console.log(myNovel);