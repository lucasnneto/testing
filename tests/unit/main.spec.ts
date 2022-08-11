import { setActivePinia, createPinia } from "pinia";
import { useStore, STATUS } from "@/store/index";
import { http } from "@/service/index";

jest.mock("@/service/index");

describe("store-main", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("testando função para obter usuarios da API", async () => {
    (http.get as jest.Mock).mockResolvedValue({
      data: [
        {
          id: "1",
          name: "name1",
          username: "username1",
          phone: "1",
        },
      ],
    });
    const main = useStore();
    await main.GET_USERS();
    console.log(main.users);
    expect(main.users.length).toBeTruthy();
    expect(main.users[0].id).toBe("1");
    expect(main.users[0].name).toBe("name1");
    expect(main.users[0].username).toBe("username1");
    expect(main.users[0].phone).toBe("1");
  });
  it("caso de erro", async () => {
    (http.get as jest.Mock).mockRejectedValue({});
    const main = useStore();
    await main.GET_USERS();
    expect(main.status).toBe(STATUS.ERROR);
    expect(main.error).toBeTruthy();
  });
});
