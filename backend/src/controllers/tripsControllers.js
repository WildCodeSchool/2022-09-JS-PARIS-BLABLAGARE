const { sqldb } = require("../models/db");

const getTrips = (req, res) => {
  const { id, origin, day, hour } = req.params;
  let tripsFilter =
    "SELECT u_alias, t_id, t_search, t_origin, t_dest1, t_dest2, t_dest3, DATE_FORMAT(t_date, '%d/%m/%Y') AS day, TIME_FORMAT(t_hour, '%Hh%i') AS t_hour, t_comments, u_email, u_id FROM trips INNER JOIN users ON users.u_id = trips.t_users_id";
  const tripsValues = [];
  if (id != null) {
    tripsFilter += " WHERE u_id != ?";
    tripsValues.push(id);

    if (origin != null) {
      tripsFilter += " AND t_origin = ?";
      tripsValues.push(origin);

      if (day != null) {
        tripsFilter += " AND t_date = ? ";
        tripsValues.push(day);

        if (hour != null) {
          tripsFilter += "AND t_hour >= ? ORDER BY t_hour";
          tripsValues.push(hour);
        }
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
      "SELECT t_id, u_alias, t_search, t_origin, t_dest1, t_dest2, t_dest3, t_comments, TIME_FORMAT(t_hour, '%Hh%i') AS t_hour, DATE_FORMAT(t_date, '%d/%m/%Y') AS day FROM trips INNER JOIN users ON users.u_id = trips.t_users_id WHERE t_users_id = ?",
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
  const { search, origin, dest1, dest2, dest3, date, hour, comments, usersId } =
    req.body;
  sqldb
    .query(
      "INSERT INTO trips ( t_search, t_origin, t_dest1, t_dest2, t_dest3, t_date, t_hour, t_comments, t_users_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [search, origin, dest1, dest2, dest3, date, hour, comments, usersId]
    )
    .then(([result]) => {
      res.location(`/trips/${result.insertId}`).sendStatus(201);
    });
};

const deleteTripsById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10);
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
