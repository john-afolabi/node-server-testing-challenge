const db = require("../data/db-config");

function addUser(user) {
  return db("user")
    .insert(user)
    .then(([id]) => {
      return db("user")
        .where({ id })
        .first();
    });
}

module.exports = {
  addUser
};
