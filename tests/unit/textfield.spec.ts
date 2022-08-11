import { mount } from "@vue/test-utils";
import textfield from "@/components/textfield.vue";
describe("textfield.vue", () => {
  it("simulando uma label", () => {
    const wrapper = mount(textfield, {
      propsData: {
        label: "teste",
      },
    });
    const label = wrapper.find("label");
    expect(label.text()).toBe("teste");
  });
  it("simulando envio de um valor inicial", () => {
    const wrapper = mount(textfield, {
      propsData: {
        value: "teste",
      },
    });
    const input = wrapper.find<HTMLInputElement>("input");
    expect(input.element.value).toBe("teste");
  });
  it("simulando atualizacao de um valor", async () => {
    const onInput = jest.fn();
    const wrapper = mount(textfield, {
      listeners: {
        input: onInput,
      },
    });
    const input = wrapper.find<HTMLInputElement>("input");
    input.element.value = "teste";
    await input.trigger("input");
    expect(onInput).toBeCalled();
    expect(onInput.mock.calls[0][0]).toBe("teste");
  });
});
