import { addTodo, findById } from "./todoHelpers";

test("addTodo should add the passed todo to the list", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false }
  ];

  const newTodo = { id: 3, name: "three", isComplete: false };

  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
});

test("addTodo should not mutate the existing todo array", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false }
  ];

  const newTodo = { id: 3, name: "three", isComplete: false };

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
});

test("findById should return the expected item from an array", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const expected = { id: 2, name: "two", isComplete: false };

  const result = findById(2, startTodos);

  expect(result).toEqual(expected);
});
