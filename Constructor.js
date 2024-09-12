//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    // getSummary = function(){
    //     return `${this.title} was written by ${this.author} in the year of ${this.year}`
    // };
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year of ${this.year}`;
}

//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.years} years old`;
}

//Instatiate
const Book1 = new Book('Love story', 'Higgins Doviko', '2002');
const Book2 = new Book('Fake love', 'Hart Doviko', '2024');
console.log(Book1.getSummary());
console.log(Book1.getAge());