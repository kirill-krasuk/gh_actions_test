import { sum } from './sum';

describe('sum.js', () => {
    it('should calculate right', () => {
        expect(sum(4, 4)).toBe(8);
    })
})
