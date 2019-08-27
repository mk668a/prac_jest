import { addCalcFun, Calc } from './standardPractices';

describe('functionを読み込む', () => {
    it('1 + 8 = 9', () => {
        expect(addCalcFun(1, 8)).toBe(9)
    });
});

// requireを使う場合
// const standardPractice = require('./standardPractices');
describe('classを読み込みます', () => {
    it('9+23 = 32', () => {
        // const calc = new standardPractice.Calc(9);
        const calc = new Calc(9);
        expect(calc.add(23)).toBe(32);
    });
});