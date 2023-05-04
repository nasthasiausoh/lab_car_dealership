const Dealership = require('./dealership')
const Car = require('./car')


let dealership;
let mercedes;

beforeEach(() => {
    dealership = new Dealership("Dealership A", 50)
    mercedes = new Car("Mercedes", 50000, "BMWTech");
    polo = new Car("Volkswagen", 8000, "VTech");
    dealership.addStock(mercedes);
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
    expect(dealership.stock.length).toBe(expected)
})

test('return an array containing each car manufacturer', () => {
    const expected = ["Mercedes", "Volkswagen"]
    actual = dealership.getAllCarManufacturers()
    expect(actual).toEqual(expected)

})

// test('find all cars by given manufacturer', () => {
//     const expected = mercedes;
//     actual = dealership.findCarManufacturers("Mercedes")
//     expect(actual).toEqual(expected)
// })

test('total value of all the cars in stock', () => {
    const expected = 13000
    actual = dealership.getTotalValue()
    expect(actual).toEqual(expected)
})
