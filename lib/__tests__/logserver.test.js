const sum = require('../index');
describe('logserver', () => {
  test('has a test', () => {
    expect(true).toEqual(true);
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
