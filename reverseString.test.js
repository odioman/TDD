const { reverseString } = require('./reverseString');

test('reverse string', () => {
    expect(reverseString('Hello')).toBe('olleH')
})
