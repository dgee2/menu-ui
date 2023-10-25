import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";

import TestUtilsCounter from "./TestUtilsCounter.vue";

describe("TestUtilsCounter", () => {
  it("emits an event when clicked", () => {
    const wrapper = mount(TestUtilsCounter);

    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("increment");
  });

  it("emits an event with count when clicked", () => {
    const wrapper = mount(TestUtilsCounter);

    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");

    const incrementEvent = wrapper.emitted("increment");

    expect(incrementEvent).toHaveLength(2);

    expect(incrementEvent?.[0]).toEqual([1]);
    expect(incrementEvent?.[1]).toEqual([2]);
  });
});

import TestUtilsCounterComplex from "./TestUtilsCounterComplex.vue";

describe("TestUtilsCounterComplex", () => {
  it("emits an event with count when clicked", () => {
    const wrapper = mount(TestUtilsCounterComplex);

    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");

    expect(wrapper.emitted("increment")).toHaveLength(2);

    expect(wrapper.emitted("increment")?.[0]).toEqual([
      {
        count: 1,
        isEven: false,
      },
    ]);

    expect(wrapper.emitted("increment")?.[1]).toEqual([
      {
        count: 2,
        isEven: true,
      },
    ]);
  });
});
