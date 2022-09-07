const { sqldb } = require("../../db");

const getUsers = async (req, res) => {
  const users = await sqldb.query("select * from users");
  res.status(201).json(users);
};

const getUser = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const alias = req.params.alias;
  sqldb
    .query("select * from users where alias = ?", [alias])
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
  const { firstname, lastname, Email, alias, hashedPassword } = req.body;
  sqldb
    .query(
      "INSERT INTO users ( firstname, lastname, Email, alias, hashedPassword ) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, Email, alias, hashedPassword]
    )
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    });
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  sqldb
    .query("DELETE FROM users WHERE id = ?", [id])
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
  const { firstname, lastname, Email, alias, hashedPassword } = req.body;
  sqldb
    .query(
      "UPDATE users SET firstname =?, lastname =?, Email =?, alias =?, hashedPassword =? where id =?",
      // eslint-disable-next-line no-undef
      [firstname, lastname, Email, alias, hashedPassword, id]
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

module.exports = { getUsers, getUser, postUsers, deleteUsers, updateUsers };
