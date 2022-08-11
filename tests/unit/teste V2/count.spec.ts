import { setActivePinia, createPinia } from "pinia";
import { useStore } from "@/store/count";

describe("store-count", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("testando a função de ADD", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.add();
    expect(count.count).toBe(2);
    expect(count.doubleCount).toBe(4);
  });
  it("testando a função ADD passando parametro", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.add(9);
    expect(count.count).toBe(10);
    expect(count.doubleCount).toBe(20);
  });
  it("testando a função REDUCE", () => {
    const count = useStore();
    expect(count.count).toBe(1);
    expect(count.doubleCount).toBe(2);
    count.reduce();
    expect(count.count).toBe(0);
    expect(count.doubleCount).toBe(0);
  });
});
