const Dealership = require('./dealership')
const Car = require('./car')
// the order you import these in does not matter in our case
// but if it happens that they are dependent on each other in a particular way then the order would matter, very rare that this happens tho


let dealership;
let mercedes;

beforeEach(() => {
    dealership = new Dealership("Dealership A", 50);

    mercedes = new Car("Mercedes", 50000, "BMWTech");
    polo = new Car("Volkswagen", 8000, "VTech");
    dealership.addStock(mercedes); // in solutions they did dealership.addCar(new Car... )
    dealership.addStock(polo);

})

// stock:
test('count stock', () => {
    const expected = 2;
    expect(dealership.countStock()).toBe(expected);
})


test('can add stock', () => {
    corsa = new Car("Vauxhall", 3000, "EcoTech");
    dealership.addStock(corsa);
    expected = 3
    expect(dealership.stock.length).toBe(expected)  // toBe already has strict equality within it . note that toBe and maybe toEqual and toStrictEqual is given by jest. 
})

test('return an array containing each car manufacturer', () => {
    const expected = ["Mercedes", "Volkswagen"]
    actual = dealership.getAllCarManufacturers()
    expect(actual).toEqual(expected)   // should use toStrictEqual instead of toEqual becuase toEqual is just == whereas toStrictEqual is a ===
// toBe compares the data value is the same: i.e. 4 = 4 is the same, but 4 isn't the same as String "4"
// toEqual compares the contents in an object/array are the same i.e. 4 = 4 is the same,  4 and "4" are the same
// toStrictEqual compares the data value AND the contents in an object/array are the same 
})



// didn't work
// test('find all cars by given manufacturer', () => {
//     const expected = [new Car("Mercedes", 50000, "BMWTech")];
//     actual = dealership.findCarManufacturers("Mercedes")
//     expect(actual).toEqual(expected)
// })
// use the test from solutions instead.


// didn't work either, check solutions:
// test('total value of all the cars in stock', () => {
//     const expected = 13000
//     actual = dealership.getTotalValue()
//     expect(actual).toEqual(expected)
// })






/* Moving on to the Customer and customer.test next:
in Zsolt's review he did an integrated test where he expected 3 things to happen when selling the £20,000 BMW to anna
1) customer.car = newCar
2) cars in stock = 2 (since there was only 3 cars to begin with, so now one less = 2)
3) customer.wallet reducing by 20,000 so now only equalling 0 because anna's wallet was only equal to 20,000

in his dealership class he created another method called sellCar
and had a indexOfCarToSell -> he found the index of the car he wanted to sell and 
then removed it from the array by splicing it.
*/