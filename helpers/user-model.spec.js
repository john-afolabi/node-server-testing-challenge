const db = require("../data/db-config");
const Users = require("../helpers/user-model");

beforeEach(async () => {
  await db("user").truncate();
});

describe("Users model", () => {
  describe("Add Users function", () => {
    it("Adds new users to the database", async () => {
      await Users.addUser({ name: "Joe" });
      await Users.addUser({ name: "Luke" });
      const users = await db("user");
      expect(users).toHaveLength(2);
    });

    it("Returns the new user added to database", async () => {
      const newUser = await Users.addUser({ name: "Joe" });
      expect(newUser).toMatchObject({ id: 1, name: "Joe" });
    });
  });

  describe("Get Users function", () => {});

  describe("Delete Users function", () => {});
});
