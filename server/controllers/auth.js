const bcrypt = require("bcryptjs");

const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          users[i].passwordHash
        );
        if (isAuthenticated) {
          let userMinusPassword = { ...users[i] };
          delete userMinusPassword.passwordHash;
          return res.status(200).send(userMinusPassword);
        }
      }
    }
    return res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log(req.body);

    const { username, email, firstName, lastName, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    let user = {
      username,
      email,
      firstName,
      lastName,
      passwordHash,
    };

    users.push(user);

    let userMinusPassword = { ...user };
    delete userMinusPassword.passwordHash;
    return res.status(200).send(userMinusPassword);
  },
};
