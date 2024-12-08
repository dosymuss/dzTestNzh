 function squareNonNegativeNumbers(a, b, c) {
    // Создаем массив из трех чисел
    const numbers = [a, b, c];
  
    // Применяем к каждому числу проверку и возврат квадрата, если оно неотрицательное
    const squaredNumbers = numbers.map(num => (num >= 0 ? num ** 2 : num));
  
    return squaredNumbers;
  }
  
  // Пример использования
  const result = squareNonNegativeNumbers(3, -2, 5);
//   console.log(result); // [9, -2, 25]
  

module.exports = squareNonNegativeNumbers