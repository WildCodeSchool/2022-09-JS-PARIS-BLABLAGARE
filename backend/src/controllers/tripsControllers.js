const { sqldb } = require("../../db");

const getTrips = (req, res) => {
  let tripsFilter =
    "select alias, search, origin, to1, to2, to3, DATE_FORMAT(day, '%d %m %Y') AS day, hour, comments, Email from trips INNER JOIN users ON users.id = trips.users_id";
  const tripsValues = [];

  if (req.query.origin != null) {
    tripsFilter += " where origin = ?";
    tripsValues.push(req.query.origin);

    if (req.query.day != null) {
      tripsFilter += "and day = ? ";
      tripsValues.push(req.query.day);

      if (req.query.hour != null) {
        tripsFilter += "and hour >= ? ORDER BY hour";
        tripsValues.push(req.query.hour);
      }
    }
  }
  sqldb
    .query(tripsFilter, tripsValues)

    .then(([trips]) => {
      res.json(trips);
    })
    .catch((err) => {
      res.status(500).send(`error retrieving data from database ${err}`);
    });
};

const getTripsByUser = (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10);
  sqldb
    .query(
      "select alias, search, origin, to1, to2, to3, day, hour from trips INNER JOIN users ON users.id = trips.users_id WHERE users_id = ?",
      [id]
    )
    .then(([trips]) => {
      res.json(trips);
    })
    .catch((err) => {
      res.status(500).send(`error retrieving data from database ${err}`);
    });
};

const postTrips = (req, res) => {
  // eslint-disable-next-line camelcase
  const { search, origin, to1, to2, to3, day, hour, comments, users_id } =
    req.body;
  sqldb
    .query(
      "INSERT INTO trips ( search, origin, to1, to2, to3, day, hour, comments, users_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      // eslint-disable-next-line camelcase
      [search, origin, to1, to2, to3, day, hour, comments, users_id]
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

module.exports = {
  getTrips,
  postTrips,
  deleteTrips,
  getTripsByUser,
};
