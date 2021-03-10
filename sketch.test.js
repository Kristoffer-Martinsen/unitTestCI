const {sum, prod} = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Multiply 4 and 5 to be equal to 20', () => {
    expect(prod(4, 5)).toBe(20);
})
