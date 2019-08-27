import { addCalcAsyncFun } from './async';

describe('async/awaitを使ったテスト', () => {
    describe('beforeEachでasync/await', () => {
        let res = 0;

        beforeEach(async () => {
            res = await addCalcAsyncFun(8, 22);
        });

        it('8 + 22 = 33', () => {
            expect(res).toBe(30);
        });
    });

    describe('itの中でasync/await', () => {
        it('7 + 21 = 28 をasync/awaitで', async () => {
            const res = await addCalcAsyncFun(7, 21);
            expect(res).toBe(28);
        });

        it('7 + 22 = 29 を expect resolvesで', () => {
            expect(addCalcAsyncFun(7, 22)).resolves.toBe(29);
        });
    });
});