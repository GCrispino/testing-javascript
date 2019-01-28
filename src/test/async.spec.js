const assert = require("assert");
const { findUserByEmail, findUserById } = require("../async");

describe("The async tests", () => {
  describe("The findUserById function", () => {
    it("should return found user data by id", async () => {
      const result = await findUserById(1);

      assert.equal(result.user.name, "bahdcoder");
    });
  });

  describe("The findUserByEmail", () => {
    it("should find user by email", async () => {
      const {
        user: { id, email }
      } = await findUserByEmail("bahdcoder@gmail.com");

      assert.equal(email, "bahdcoder@gmail.com");
      assert.equal(id, 1);
    });

    it("should throw error if email does not exist", () =>
      findUserByEmail("example@gmail.com").catch(({ message }) =>
        assert.equal(
          message,
          "User with email: example@gmail.com was not found."
        )
      ));

    it("should throw error if id does not exist", () =>
      findUserById(5).catch(({ message }) =>
        assert.equal(message, "User with id: 5 was not found.")
      ));
    // it("should throw error if id does not exist", async () => {
    //   let failed = false;
    //   try {
    //     await findUserById(5);
    //     failed = true;
    //   } catch ({ message }) {
    //     assert.equal(message, "User with id: 5 was not found.");
    //   }
    //   assert.equal(failed, false);
    // });
  });
});
