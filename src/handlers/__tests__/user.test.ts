import * as user from "../user";

describe("user handler", () => {
  it("should make new user", async () => {
    const req = { body: { username: "adnan", password: "123" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.createNewUser(req, res, () => {});
  });
});
