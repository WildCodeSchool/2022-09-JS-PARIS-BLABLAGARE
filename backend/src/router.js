const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const usersControllers = require("./controllers/usersControllers");
const tripsControllers = require("./controllers/tripsControllers");

router.get("/users", usersControllers.getUsers);
router.get("/users/:alias", usersControllers.getUser);
router.post("/users", usersControllers.postUsers);
router.delete("/users/:id", usersControllers.deleteUsers);
router.put("/users/:id", usersControllers.updateUsers);

router.get("/trips", tripsControllers.getTrips);
router.get("/trips/:id", tripsControllers.getTripsByUser);
// router.get("/trips/:origin", tripsControllers.getTripsbyOrigin);
router.post("/trips", tripsControllers.postTrips);
router.delete("/trips/:id", tripsControllers.deleteTrips);

module.exports = router;
