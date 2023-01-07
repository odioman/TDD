const { caesarCipher } = require('./caesarCipher');

test('Shift 1 letter forward', () => {
    expect(caesarCipher('Freedom', 1)).toBe('Gsffepn');
});

test('Shift 2 letters forward', () => {
    expect(caesarCipher('Liberty', 2)).toBe('Nkdgtva');
});

test('Shift 13 letters forward', () => {
    expect(caesarCipher('Equality', 13)).toBe('Rdhnyvgl');
});

test('Shift 1 letter back', () => {
    expect(caesarCipher('Gsffepn', -1)).toBe('Freedom');
});

test('Shift 2 letters back', () => {
    expect(caesarCipher('Nkdgtva', -2)).toBe('Liberty');
})

test('Shift 13 letters back', () => {
    expect(caesarCipher('Rdhnyvgl', -13)).toBe('Equality');
})