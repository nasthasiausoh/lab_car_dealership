const Dealership = require('./dealership')
const Car = require('./car')


let dealership;
let mercedes;

beforeEach(() => {
    dealership = new Dealership("Dealership A", 50)
    mercedes = new Car("Mercedes", 50000, "BMWTech");
    dealership.addStock(mercedes);

})

// stock:

test('count stock', () => {
    corsa = new Car("Vauxhall", 3000, "EcoTech");
    dealership.addStock(corsa);
    const expected = 2;
    expect(dealership.countStock()).toBe(expected);
})

test('can add stock', () => {
    dealership.addStock(corsa);
    expected = 2
    expect(dealership.stock.length).toBe(expected)
})



