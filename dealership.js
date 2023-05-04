const Car = require('./car');

const Dealership = function(name, maxNoOfCars, stock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];
}


// Methods:

// method for counting stock:
Dealership.prototype.countStock = function(){
    return this.stock.length;
}


// method for adding stock to dealership
Dealership.prototype.addStock = function(newCar){
    this.stock.push(newCar);
}

// method for returning an array containing each car's manufacturer:
Dealership.prototype.getAllCarManufacturers = function(){
    const manufacturers = this.stock.map(car => car.manufacturer);
        return manufacturers;
};


// method for finding all the cars from a given manufacturer: NOT WORKING
// Dealership.prototype.findCarManufacturers = function(){
//     const findCarByManufacturer = this.stock.filter(car => car.manufacturer);
//     return findCarByManufacturer;  
// };

// method for finding the total value of all the cars in stock
Dealership.prototype.getTotalValue = function() {
    const totalCarValue = Car.reduce((accumulator, car) => {
        return accumulator + car.price
    }, 0)
}

module.exports = Dealership;