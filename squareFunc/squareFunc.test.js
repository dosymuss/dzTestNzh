const squareNonNegativeNumbers = require("./squareFunc")




describe('squareNonNegativeNumbers', () => {
  // 1. Общий тест: Все числа внутри допустимой области
  test('should square all non-negative numbers (general case)', () => {
    expect(squareNonNegativeNumbers(3, 2, 5)).toEqual([9, 4, 25]);
  });

  // 2. Граничный тест: Одно значение на нижней границе (0)
  test('should square zero and leave negative numbers unchanged', () => {
    expect(squareNonNegativeNumbers(0, -1, -2)).toEqual([0, -1, -2]);
  });

  // 3. Граничный тест: Все числа равны 0 (нижняя граница)
  test('should return zeroes for all inputs being zero', () => {
    expect(squareNonNegativeNumbers(0, 0, 0)).toEqual([0, 0, 0]);
  });

  // 4. Общий тест: Смешанные значения
  test('should square non-negative numbers and leave negative numbers unchanged', () => {
    expect(squareNonNegativeNumbers(-3, 4, 0)).toEqual([-3, 16, 0]);
  });

  // 5. Отрицательный тест: Все числа отрицательные
  test('should leave all negative numbers unchanged', () => {
    expect(squareNonNegativeNumbers(-3, -2, -1)).toEqual([-3, -2, -1]);
  });

  // 6. Граничный тест: Значения на максимальной границе
  test('should correctly handle large non-negative numbers', () => {
    expect(squareNonNegativeNumbers(1000, 2000, -3000)).toEqual([1000000, 4000000, -3000]);
  });

  // 7. Отрицательный тест: Одно значение выходит за границу
  test('should square valid numbers and leave out-of-bounds numbers unchanged', () => {
    expect(squareNonNegativeNumbers(3, -2, Number.MAX_SAFE_INTEGER)).toEqual([9, -2, Number.MAX_SAFE_INTEGER ** 2]);
  });
});

