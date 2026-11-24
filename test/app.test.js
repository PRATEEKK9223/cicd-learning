const { test } = require('node:test');
const assert = require('node:assert');

const { add, subtract, multiply } = require('../src/app');

test('Addition should return correct result', () => {
    assert.strictEqual(add(10, 20), 30);
});

test('Subtraction should return correct result', () => {
    assert.strictEqual(subtract(20, 10), 10);
});

test('Multiplication should return correct result', () => {
    assert.strictEqual(multiply(5, 5), 25);
});