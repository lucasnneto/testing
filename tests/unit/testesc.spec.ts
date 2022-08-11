import { setActivePinia, createPinia } from "pinia";
import { useStore } from "@/store/count";

describe("delete.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("testando função ADD", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.add();
    expect(count.count).toBe(2);
    expect(count.doubleCount).toBe(4);
  });
  it("testando função ADD passando valores", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.add(9);
    expect(count.count).toBe(10);
    expect(count.doubleCount).toBe(20);
  });
  it("testando função REDUCE", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.reduce();
    expect(count.count).toBe(0);
    expect(count.doubleCount).toBe(0);
  });
});
