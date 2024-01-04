import { expect, test } from "vitest";
import TestFormsAdvanced from "./TestFormsAdvanced.vue";
import { mount } from "@vue/test-utils";

test("submits a form", async () => {
  const wrapper = mount(TestFormsAdvanced);

  const email = "name@mail.com";
  const description = "Lorem ipsum dolor sit amet";
  const city = "moscow";

  await wrapper.find("input[type=email]").setValue(email);
  await wrapper.find("textarea").setValue(description);
  await wrapper.find("select").setValue(city);
  await wrapper.find("input[type=checkbox]").setValue();
  await wrapper.find("input[type=radio][value=monthly]").setValue();

  await wrapper.find("form").trigger("submit.prevent");

  expect(wrapper.emitted("submit")?.[0]?.[0]).toStrictEqual({
    email,
    description,
    city,
    subscribe: true,
    interval: "monthly",
  });
});
