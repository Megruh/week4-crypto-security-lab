const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const correctPass = bcrypt.compareSync(password, users[i].passwordHash);
        if (correctPass) {
          let userInput = { ...users[i] };
          delete userInput.passwordHash;
          res.status(200).send(userInput);
          console.log("login successful")
          return;
        }
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
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
    let userInput = { ...user };
    delete userInput.passwordHash;
    res.status(200).send(userInput);
  },
};
