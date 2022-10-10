const mathOperations = require('./calculator.js');

describe("Calculator tests sum", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test('adding 5 + 6 should return 11', () => {
        expect(mathOperations.sum(5,6)).toBe(11);
    });
    test('sub 1 - 2 should return -1', () => {
        expect(mathOperations.sub(1, 2)).toBe(-1);
    });
    test('sub 1 - 2 should return -10', () => {
        expect(mathOperations.sub(10,20)).toBe(-10);
    });
    test('product 1 * 2 should return 2', () => {
        expect(mathOperations.product(1, 2)).toBe(2);
    });
    test('product 8 * 8 should return 64', () => {
        expect(mathOperations.product(8,8)).toBe(64);
    });
    test('adding 8 + 8 should return 16', () => {
        expect(mathOperations.sum(8,8)).not.toBe(15);
    });
})