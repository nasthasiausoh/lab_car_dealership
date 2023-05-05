const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
};

module.exports = Car;

/* we are exporting the 'Car' constructor we made on line 1. 
 which we will import in the car.test.
 in that file we did:
const Car = require('./car')
 so it is saying we are importing the 'Car' constructor,
which we are exporting for the "/.car" file.
*/


/*
we do not make new Car objects in here because these will be
exported too which we could do but do not need to do at all
 we will just create these new objects where we need them.
 which would be in test class.
*/


/* Also, the naming convention is:
Car.js, 
car.test.js
Dealership
dealership.test.js
Customer.js
customer.test*/