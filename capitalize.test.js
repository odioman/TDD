const { capitalize } = require('./capitalize');

test('capitalize', () => {
    expect(capitalize('hello, governor')).toBe('Hello, governor')
})
