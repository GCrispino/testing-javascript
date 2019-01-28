const users = require("./db/users");

const findUserById = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(({ id: uid }) => uid == id);

      if (!user) {
        return reject(new Error(`User with id: ${id} was not found.`));
      }

      return resolve({
        message: "User found successfully.",
        user
      });
    }, 10);
  });

const findUserByEmail = email =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(({ email: uemail }) => uemail == email);

      if (!user) {
        return reject(new Error(`User with email: ${email} was not found.`));
      }

      return resolve({
        message: "User found successfully.",
        user
      });
    }, 10);
  });

module.exports = {
  findUserByEmail,
  findUserById
};
