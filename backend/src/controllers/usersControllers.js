const { sqldb } = require("../../db");

const getUsers = async (req, res) => {
  const users = await sqldb.query("SELECT * FROM users");
  res.status(201).json(users);
};

const getUser = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const alias = req.params.alias;
  sqldb
    .query("SELECT * FROM users WHERE u_alias = ?", [alias])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      res.status(500).send(`error retrieving data from database ${err}`);
    });
};

const postUsers = (req, res) => {
  const { firstname, lastname, email, alias, hashedPassword } = req.body;
  sqldb
    .query(
      "INSERT INTO users ( u_firstname, u_lastname, u_email, u_alias, u_hashedPassword ) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, alias, hashedPassword]
    )
    .catch((err) => {
      res.status(409).send(`erreur ${err}`);
    })
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    });
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  sqldb
    .query("DELETE FROM users WHERE u_id = ?", [id])
    .then(([erase]) => {
      if (erase.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.status(201).json({ message: `user ${id} was deleted` });
      }
    })
    .catch((err) => {
      res.status(500).send(`erreur ${err}`);
    });
};

const updateUsers = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, alias, hashedPassword } = req.body;
  sqldb
    .query(
      "UPDATE users SET u_firstname =?, u_lastname =?, u_email =?, u_alias =?, u_hashedPassword =? WHERE u_id =?",
      // eslint-disable-next-line no-undef
      [firstname, lastname, email, alias, hashedPassword, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.status(201).json({ message: `task ${id} was updated` });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `task ${id} was not updated because : ${err}`,
      });
    });
};
const updateUsersPassword = (req, res) => {
  const alias = req.payload.sub;
  const { hashedPassword } = req.body;
  sqldb
    .query(
      "UPDATE users SET u_hashedPassword =? WHERE u_alias =?",
      // eslint-disable-next-line no-undef
      [hashedPassword, alias]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.status(201).json({ message: `task ${alias} was updated` });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `task ${alias} was not updated because : ${err}`,
      });
    });
};

const getUserByAliasWithPasswordAndPassToNext = (req, res, next) => {
  const { alias } = req.body;

  sqldb
    .query("SELECT * FROM users WHERE u_alias =?", [alias])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUsers,
  getUser,
  postUsers,
  deleteUsers,
  updateUsers,
  updateUsersPassword,
  getUserByAliasWithPasswordAndPassToNext,
};
