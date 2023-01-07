const { calculator } = require('./calculator');

test('Add', () => {
    expect(calculator.add(4, 16)).toEqual(20);
});

test('Subtract', () => {
    expect(calculator.subtract(16, 4)).toEqual(12);
});

test('Multiply', () => {
    expect(calculator.multiply(16, 4)).toEqual(64);
});

test('Divide', () => {
    expect(calculator.divide(16, 3)).toBeCloseTo(5.333);
});