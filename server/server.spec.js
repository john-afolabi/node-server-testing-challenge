const server = require("./server");
const request = require("supertest");

describe("Server.js module", () => {
  it("Has the right environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("Home endpoint", () => {
    it("Returns 200 OK", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("Returns the right body", () => {
      return request(server)
        .get("/")
        .expect({ message: `This API is working` });
    });
  });
});
