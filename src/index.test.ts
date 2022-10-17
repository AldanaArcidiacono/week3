import { twice } from './tools';

describe('first', () => {
    test('should first', () => {
        const x = 2;
        const expectedResult = 4;
        const r = twice(x);
        expect(r).toBe(expectedResult);
    });
});
