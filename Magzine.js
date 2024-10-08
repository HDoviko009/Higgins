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

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
} 
//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 =  new Magazine('Mag one', 'Nyatie Ntchafu', '2018', 'Sept');
console.log(mag1.getSummary());