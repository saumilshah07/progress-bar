import { calculateProgress } from './index';

describe('calculateProgress', () => {
  it('should add new progress', () => {
    const result = calculateProgress(10, '+', 10);
    expect(result).toBe(20);
  });

  it('should minus new progress', () => {
    const result = calculateProgress(10, '-', 5);
    expect(result).toBe(5);
  });

  it('should return 0 ', () => {
    const result = calculateProgress(10, '-', 15);
    expect(result).toBe(0);
  });
});
