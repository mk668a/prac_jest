import { callErrorAsyncFun, callErrorFun } from "./error";

describe('confirm error ', () => {
    it('basic error', () => {
        expect(callErrorFun).toThrow()
    })

    it('async error', () => {
        expect(callErrorAsyncFun()).rejects.toThrow()
    })
})