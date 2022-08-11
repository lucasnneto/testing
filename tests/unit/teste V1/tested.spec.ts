import { mount, Wrapper } from "@vue/test-utils";
import deleteIcon from "@/components/delete.vue";

describe("delete.vue", () => {
  let wrapper: Wrapper<deleteIcon>;
  const color = "red";
  beforeEach(() => {
    wrapper = mount(deleteIcon, {
      propsData: { color: color },
    });
  });
  it("Componente instanciado", () => {
    expect(wrapper.vm).toBeDefined();
  });
  it("Definindo cor no componente", () => {
    const icon = wrapper.find("svg");
    expect(icon.attributes("fill")).toBe(color);
  });
});
