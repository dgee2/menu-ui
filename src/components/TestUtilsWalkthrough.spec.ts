import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";

const MessageComponent = {
  template: "<p>{{msg}}</p>",
  props: ["msg"],
};

describe("MessageComponent", () =>
  it("displays message", () => {
    const wrapper = mount(MessageComponent, {
      props: { msg: "Hello World" },
    });

    expect(wrapper.text()).toContain("Hello World");
  }));

const Nav = {
  template: `
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
  `,
  data() {
    return { admin: false };
  },
};

describe("Nav", () => {
  it("renders a profile link", () => {
    const wrapper = mount(Nav);

    const profileLink = wrapper.get("#profile");

    expect(profileLink.text()).toEqual("My Profile");
  });
  it("does not render an admin link", () => {
    const wrapper = mount(Nav);

    expect(wrapper.find("#admin").exists()).toBe(false);
  });
  it("renders an admin link", () => {
    const wrapper = mount(Nav, {
      data() {
        return { admin: true };
      },
    });

    expect(wrapper.get("#admin").text()).toEqual("Admin");
  });
});

const NavShouldShowDropdown = {
  template: `
    <nav>
      <a id="user" href="/profile">My Profile</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown">
        <!-- dropdown content -->
      </ul>
    </nav>
  `,
  data() {
    return {
      shouldShowDropdown: false,
    };
  },
};

describe("NavShouldShowDropdown", () => {
  it("does not show the user dropdown", () => {
    const wrapper = mount(NavShouldShowDropdown);

    expect(wrapper.get("#user-dropdown").isVisible()).toBe(false);
  });
});
