import { mount } from "@vue/test-utils";
import textfield from "@/components/textfield.vue";

describe("textfield.vue", () => {
  it("Simulando label", () => {
    const value = "label";
    const wrapper = mount(textfield, {
      propsData: { label: value },
    });
    const label = wrapper.find<HTMLLabelElement>("label");
    expect(label.text()).toBe(value);
  });
  it("Simulando envio de valor inicial", () => {
    const value = "test value";
    const wrapper = mount(textfield, {
      propsData: { value: value },
    });
    const input = wrapper.find<HTMLInputElement>("input");
    expect(input.element.value).toBe(value);
  });
  it("simulando atualização do valor", async () => {
    const onInput = jest.fn();
    const wrapper = mount(textfield, {
      listeners: {
        input: onInput,
      },
    });
    const input = wrapper.find<HTMLInputElement>("input");
    input.element.value = "teste";
    await input.trigger("input");
    expect(onInput.mock.calls[0][0]).toBe("teste");
  });
});
