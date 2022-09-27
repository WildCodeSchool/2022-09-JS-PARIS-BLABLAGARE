const { sqldb } = require("../../db");

const getTrips = (req, res) => {
  let tripsFilter =
    "SELECT u_alias, t_id, t_search, t_origin, t_dest1, t_dest2, t_dest3, DATE_FORMAT(t_date, '%d %m %Y') AS day, t_hour, t_comments, u_email FROM trips INNER JOIN users ON users.u_id = trips.t_users_id";
  const tripsValues = [];

  if (req.query.origin != null) {
    tripsFilter += " WHERE t_origin = ?";
    tripsValues.push(req.query.origin);

    if (req.query.day != null) {
      tripsFilter += "AND t_date = ? ";
      tripsValues.push(req.query.day);

      if (req.query.hour != null) {
        tripsFilter += "AND t_hour >= ? ORDER BY t_hour";
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
      "SELECT u_alias, t_search, t_origin, t_dest1, t_dest2, t_dest3, t_date, t_hour FROM trips INNER JOIN users ON users.u_id = trips.t_users_id WHERE t_users_id = ?",
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
  const { search, origin, dest1, dest2, dest3, date, hour, comments, usersId } =
    req.body;
  sqldb
    .query(
      "INSERT INTO trips ( t_search, t_origin, t_dest1, t_dest2, t_dest3, t_date, t_hour, t_comments, t_users_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      // eslint-disable-next-line camelcase
      [search, origin, dest1, dest2, dest3, date, hour, comments, usersId]
    )
    .then(([result]) => {
      res.location(`/trips/${result.insertId}`).sendStatus(201);
    });
};

const deleteTripsById = (req, res) => {
  const { id } = req.params;
  sqldb
    .query("DELETE FROM trips WHERE t_id = ?", [id])
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
  deleteTripsById,
  getTripsByUser,
};
