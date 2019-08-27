export function callErrorFun(): void {
    throw new Error('error');
}

export async function callErrorAsyncFun(): Promise<void> {
    throw new Error('asyncError');
}