import { setActivePinia, createPinia } from "pinia";
import { useStore } from "@/store/index";
import { http } from "@/service/index";
jest.mock("@/service/index");
const mockUser = [
  {
    id: "1",
    name: "name1",
    username: "username1",
    phone: "1",
  },
];
describe("main", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("testando função para obter usuarios da API", async () => {
    (http.get as any).mockResolvedValue({
      data: mockUser,
    });
    const main = useStore();
    await main.GET_USERS();
    // expect(main.users).toEqual(mockUser);
    expect(main.users[0].id).toBe("1");
    expect(main.users[0].name).toBe("name1");
    expect(main.users[0].username).toBe("username1");
    expect(main.users[0].phone).toBe("1");
  });
});
