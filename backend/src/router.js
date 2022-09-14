const express = require("express");

const router = express.Router();

const { validateUser } = require("./validators");

const usersControllers = require("./controllers/usersControllers");
const tripsControllers = require("./controllers/tripsControllers");

router.get("/users", usersControllers.getUsers);
router.get("/users/:alias", usersControllers.getUser);
router.post("/users", validateUser, usersControllers.postUsers);
router.delete("/users/:id", usersControllers.deleteUsers);
router.put("/users/:id", validateUser, usersControllers.updateUsers);

router.get("/trips", tripsControllers.getTrips);
router.get("/trips/:id", tripsControllers.getTripsByUser);
router.post("/trips", tripsControllers.postTrips);
router.delete("/trips/:id", tripsControllers.deleteTripsById);

module.exports = router;
