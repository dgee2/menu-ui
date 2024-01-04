import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import TodoApp from "./TodoApp.vue";

test("renders a todo", () => {
  // Arrange
  const wrapper = mount(TodoApp);

  // Act
  const todo = wrapper.get('[data-test="todo"]');

  // Assert
  expect(todo.text()).toBe("Learn Vue.js 3");
});

test("creates a todo", async () => {
  // Arrange
  const wrapper = mount(TodoApp);
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

  // Act
  await wrapper.get('[data-test="new-todo"]').setValue("New todo");
  await wrapper.get('[data-test="form"]').trigger("submit");

  // Assert
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
});

test("completes a todo", async () => {
  // Arrange
  const wrapper = mount(TodoApp);

  // Act
  await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

  // Assert
  expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
});
