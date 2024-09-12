class Car{
    constructor(make, model, engi_capa){
        this.make = make;
        this.model = model;
        this.engi_capa = engi_capa;
    }
    start(){
        console.log('Vroom! Vroom!');
    }
    printDetails(){
        console.log(
           `make: ${this.make} model: ${this.model} engi_capa: ${this.engi_capa}` 
        );
    }
}
const fast_car = {make: 'BMW', model: 'm8', engi_capa: 4.4};
const car = new Car ('BMW', 'X1', 1.99);
car.start();
car.start.call(fast_car);
car.printDetails();
car.printDetails.call(fast_car);
console.log(car);