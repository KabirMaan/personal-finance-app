const add = (a, b) => a + b;
const generateGreeting = name => `hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test("should return hello name", () => {
  const result = generateGreeting("dave");
  expect(result).toBe("hello dave");
});
