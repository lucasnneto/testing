import { mount } from "@vue/test-utils";
import user from "@/components/user.vue";

describe("user.vue", () => {
  it("Validando se valores estão setando", () => {
    const item = {
      id: "1",
      name: "teste",
      username: "testeuser",
      phone: "01",
    };
    const wrapper = mount(user, {
      propsData: {
        item: item,
      },
    });
    const name = wrapper.find("#name");
    expect(name.text()).toBe(item.name);
    const username = wrapper.find("#user");
    expect(username.text()).toBe(item.username);
    const phone = wrapper.find("#phone");
    expect(phone.text()).toBe(item.phone);
  });
  it("Validando botão aparece no momento correto", async () => {
    const item = {
      id: "1",
      name: "teste",
      username: "testeuser",
      phone: "01",
    };
    const wrapper = mount(user, {
      propsData: {
        item: item,
        notBeDeleted: true,
      },
    });
    let button = wrapper.find("button");
    expect(button.exists()).toBeFalsy();
    await wrapper.setProps({ notBeDeleted: false });
    button = wrapper.find("button");
    expect(button.exists()).toBeTruthy();
  });
});
