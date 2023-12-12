import { expect, test } from "vitest";
import TestFormsVue from "./TestForms.vue";
import { mount } from "@vue/test-utils";

test("sets the value", async () => {
  const exampleEmailAddress = "my@mail.com";

  const wrapper = mount(TestFormsVue);
  const input = wrapper.find("input");

  await input.setValue(exampleEmailAddress);

  expect(input.element.value).toBe(exampleEmailAddress);
});

test("trigger", async () => {
  const wrapper = mount(TestFormsVue);

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted()).toHaveProperty("submit");
});

test("emits the input to its parent", async () => {
  const exampleEmailAddress = "my@mail.com";

  const wrapper = mount(TestFormsVue);

  await wrapper.find("input").setValue(exampleEmailAddress);

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted("submit")?.[0]?.[0]).toBe(exampleEmailAddress);
});
