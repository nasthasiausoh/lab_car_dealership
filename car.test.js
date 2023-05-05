const Car = require('./car')

let i8; // doing 'let' means that the i8 variable in the beforeEach
// will be applied to every test and that it can be reassigned.
// if it was a const then we wouldn't be able to rename/set them differently in our tests

beforeEach(() => {
    i8 = new Car("BMW", 50000, "BMWTech");

})


/* describe lets you group your tests together: 
i..e lets say we had:
"describe("Accessing car properties", () => {
    test("can access manufacturer property", () => {

    test("can access price property"), ()

    test("can access engineType property", () => )
    })
}
describe is completely optional. it just makes it easier to read the tests;
and if you get an error from one of your tests and you have a bunch of them, it
will indicate exactly where your failing test is.
FAIL:
accessing car properties -> can access engineType properties.
*/


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

