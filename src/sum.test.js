import { sum } from './sum';

describe('sum.js', () => {
    it('should calculate the sum', () => {
        expect(sum(1, 6)).toBe(7);
    })
})
