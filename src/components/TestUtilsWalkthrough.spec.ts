import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

const MessageComponent = {
  template: "<p>{{msg}}</p>",
  props: ["msg"],
};

test("displays message", () => {
  const wrapper = mount(MessageComponent, {
    props: { msg: "Hello World" },
  });

  expect(wrapper.text()).toContain('Hello World')
});
