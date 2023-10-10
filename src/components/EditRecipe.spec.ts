import { createVuetify } from "vuetify";
import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import EditRecipe from "@/components/EditRecipe.vue";

test("displays message", () => {
  const vuetify = createVuetify();
  const wrapper = mount(EditRecipe, {
    props: {
      msg: "Hello world",
    },
    global: {
      plugins: [vuetify],
    }, // Need to work out if this can be populated globally rather than on every mount call
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Hello world");
});
