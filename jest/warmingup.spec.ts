describe('たし算', () => {
    describe('変数を使います', () => {
        let beforeAllSumResult = 100;
        let beforeEachSumResult = 100;

        // このテストファイルの全てのテストが実行される前に一回だけ実行される
        beforeAll(() => {
            beforeAllSumResult = beforeAllSumResult + 33;
        });

        // このテストファイルの全てのテストが実行されたあとに一回だけ実行される
        afterAll(() => {
            beforeAllSumResult = 100;
        });

        // このテストファイルにあるテスト(it)が実行される前に毎回実行される
        beforeEach(() => {
            beforeEachSumResult = beforeEachSumResult + 33;
        })

        // このテストファイルにあるテスト(it)が実行された後に毎回実行される
        // afterEach(() => {
        //     beforeEachSumResult = beforeEachSumResult - 33;
        // })

        it('100に33足される', () => {
            expect(beforeAllSumResult).toBe(133);
        });

        it('100に33足される', () => {
            expect(beforeEachSumResult).toBe(166);
        });

        it.skip('100に66足される', () => {
            expect(beforeEachSumResult).toBe(199);
        });
    });
});



