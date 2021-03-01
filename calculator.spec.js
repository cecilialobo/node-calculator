const {sum, subtract, division, multiplication} = require('./calculator');

//sum tests
test('expect 2 + 10 to equal 12', () => {
    expect(sum(2, 10)).toEqual(12);
});

test('expect -2 + 20 to equal 18', () => {
    expect(sum(-2, 20)).toEqual(18);
});

//subtraction tests
test('expect -8 - 2 to equal - 10', () => {
    expect(subtract(-8, 2)).toEqual(-10);
});

test('expect 40 - 8 to equal 32', () => {
    expect(subtract(40, 8)).toEqual(32);
});

//division tests
test('expect -50 / 5 to equal 10', () => {
    expect(division(-50, 5)).toEqual(-10);
});

test('expect 23456 / 523 to equal 44.848948374760994', () => {
    expect(division(23456, 523)).toEqual(44.848948374760994);
});

test('expect 100 / 4 to equal 25', () => {
    expect(division(100, 4)).toEqual(25);
});

//multiplication tests
test('expect 3 * 6 to equal 26', () => {
    expect(multiplication(3, 6)).toEqual(18);
});

test('expect -8 * 10 to equal -80', () => {
    expect(multiplication(-8, 10)).toEqual(-80);
});

test('expect 6789 * 123456 to equal 838142784', () => {
    expect(multiplication(6789, 123456)).toEqual(838142784);
});