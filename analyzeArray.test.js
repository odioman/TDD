const { analyzeArray } = require('./analyzeArray');

test('Array Analysis Test 1', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        Average: 4,
        Min: 1,
        Max: 8,
        Length: 6,
    });
});

test('Array Analysis Test 2', () => {
    expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
        Average: 1,
        Min: 1,
        Max: 1,
        Length: 5,
    });
});

test('Array Analysis Test 3', () => {
    expect(analyzeArray([2, 16, 6, 8, 4, 12])).toEqual({
        Average: 8,
        Min: 2,
        Max: 16,
        Length: 6,
    });
});

test('Array Analysis Test 4', () => {
    expect(analyzeArray([0])).toEqual({
        Average: 0,
        Min: 0,
        Max: 0,
        Length: 1,
    });
});