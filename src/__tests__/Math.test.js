import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  const value1 = 2;
  const value2 = 1;
  // Act
  const result = Add(value1, value2);
  // Assert
  expect(result).toBe(3);
});

test("Return substraction of a - b", () => {
  // Arrange
  const value1 = 2;
  const value2 = 1;
  // Act
  const result = Substract(value1, value2);
  // Assert
  expect(result).toBe(1);
});

test("Return multiplication of two arguments", () => {
  // Arrange
  const value1 = 2;
  const value2 = 1;
  // Act
  const result = Multiplication(value1, value2);
  // Assert
  expect(result).toBe(2);
});
