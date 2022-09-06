const { sqldb } = require("../../db");

const getTrips = async (req, res) => {
  const trips = await sqldb.query("select * from trips");
  res.status(201).json(trips);
};

const postTrips = (req, res) => {
  // eslint-disable-next-line camelcase
  const { search, from, to1, to2, to3, day, hour, commentaire, users_id } =
    req.body;
  sqldb
    .query(
      "INSERT INTO trips ( search, from, to1, to2, to3, day, hour, commentaire, users_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      // eslint-disable-next-line camelcase
      [search, from, to1, to2, to3, day, hour, commentaire, users_id]
    )
    .then(([result]) => {
      res.location(`/trips/${result.insertId}`).sendStatus(201);
    });
};

const deleteTrips = (req, res) => {
  const { id } = req.params;
  sqldb
    .query("DELETE FROM trips WHERE id = ?", [id])
    .then(([erase]) => {
      if (erase.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.status(201).json({ message: `trip ${id} was deleted` });
      }
    })
    .catch((err) => {
      res.status(500).send(`erreur ${err}`);
    });
};

module.exports = { getTrips, postTrips, deleteTrips };
