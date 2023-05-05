const Car = require('./car'); // we don't need to import 

const Dealership = function(name, maxNoOfCars, stock){  // no need to pass in stock because we are setting it to an empty array
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];
}

/* Always put the function on the prototype
we could put the function in the constructor like this:

const Dealership = function(name, maxNoOfCars, stock){  // no need to pass in stock because we are setting it to an empty array
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];

    this.countStock = function(){
    return this.stock.length;
}

but this would apply the function to every single Dealership object 
which will cause the bloating we saw in the code along yesterday.
so we use prototypes instead. we use Dealership.prototype.methodname =
because we need to find a way to 'attach' the method to the Dealership.

i.e we couldn't just write:
 const countStock = function(){
    return this.stock.length;
 }


Methods:

 method for counting stock: */
Dealership.prototype.countStock = function(){
    return this.stock.length;
}

/* Zsolt said that functions should only have ONE function:
which most of the time is: 
1) changing something
2) returning something

so we wouldn't create a function that add to the stock AND return an array because is 2 jobs in one

even with aggregate functions they do numerous things but that is there job to do that. so it still is sticking to having one function.
*/

// method for adding stock to dealership
Dealership.prototype.addStock = function(newCar){   // 'newCar' doesn't actually do anything. it is just for the developer to know that only a new car object should be passed through. this is unlike Java and TypeScript where we could do function (Car car) {} JS is so flexible that we could actually pass anything through like even a chicken object lol. there is not control over this. we could do something like if( typeOf car !== "Car"{ return error} something along these lines.)
    this.stock.push(newCar);
} 
// should have included a condition for the this.stock.length < this.maxNoOfCars. so we cannot exceed the max number allowed
// check solutions to know exactly how to implement this


// method for returning an array containing each car's manufacturer:
Dealership.prototype.getAllCarManufacturers = function(){    // we do not need to pass in a parameter through the function () because we do not need anything from the outside world for this. we already have all the information we need.
    const manufacturers = this.stock.map(car => car.manufacturer);
        return manufacturers;
};


// method for finding all the cars from a given manufacturer: NOT WORKING
// Dealership.prototype.findCarManufacturers = function(){
//     const findCarByManufacturer = this.stock.filter(car => car.manufacturer);
//     return findCarByManufacturer;  
// };
// Zsolt did:
// Dealership.prototype.findCardFromManufacturer = function(manufacturer){  // could even name manufacturer to "manufacturerToPassIn"
//     return this.stock.filter((car) => {
//         return car.manufacturer === manufacturer; // if we did manufacturerToPassIn then we would do car.manufacturer === manufacturerToPassIn
//     })
// }


// method for finding the total value of all the cars in stock DIDN'T WORK EITHER check solutions
// Dealership.prototype.getTotalValue = function() {
//     const totalCarValue = Car.reduce((accumulator, car) => {
//         return accumulator + car.price
//     }, 0)
// }

module.exports = Dealership;