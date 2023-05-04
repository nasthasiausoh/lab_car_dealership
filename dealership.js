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

module.exports = Dealership