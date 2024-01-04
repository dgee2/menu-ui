import { createVuetify } from "vuetify";
import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import EditRecipe from "@/components/EditRecipe.vue";

test("displays message", async () => {
  const vuetify = createVuetify();
  const wrapper = mount(EditRecipe, {
    global: {
      plugins: [vuetify],
    }, // Need to work out if this can be populated globally rather than on every mount call
  });

  const input = wrapper.find("input");

  await input.setValue("Hello world");

  // Assert the rendered text of the component
  expect(wrapper.emitted()).toHaveProperty("update:title");
  expect(wrapper.emitted("update:title")?.[0]?.[0]).toBe("Hello world");
});
