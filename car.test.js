const Car = require('./car')

let i8;

beforeEach(() => {
    i8 = new Car("BMW", 50000, "BMWTech");

})

// manufacturer:
test('has manufacturer', () => {
    const expected = "BMW"
    expect(i8.manufacturer).toBe(expected);
});


test('update manufacturer name', () => {
    i8.manufacturer = "Volvo"
    expect(i8.manufacturer).toBe("Volvo")
});

// price:
test('has price', () => {
    const expected = 50000
    expect(i8.price).toBe(expected);
})

test('update i8 price', () => {
    i8.price = 45000
    expect(i8.price).toBe(45000);
})

// engine type

test('has engine type', () => {
    const expected = "BMWTech"
    expect(i8.engineType).toBe("BMWTech")
})

test('update i8 engineType', () => {
    i8.engineType = "BMWSpeed"
    expect(i8.engineType).toBe("BMWSpeed")
})









// const i8 = new Car("BMW", 40000, "BMWTech");
// console.log(BMW);
