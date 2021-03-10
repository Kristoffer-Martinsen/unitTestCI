const {sum, prod} = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Multiply 4 and 5 to be equal to 20', () => {
    expect(prod(4, 5)).toBe(20);
})

test('Divide 6 and 2 to be equal to 3', () => {
    expect(div(6, 2)).toBe(3);
})