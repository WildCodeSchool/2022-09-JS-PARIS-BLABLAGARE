const express = require("express");

const router = express.Router();

const { validateUser } = require("./middlewares/validators");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  killToken,
  isTokenKilled,
} = require("./middlewares/auth");

const usersControllers = require("./controllers/usersControllers");
const tripsControllers = require("./controllers/tripsControllers");
const { mail, forgotPassword } = require("./controllers/mailControllers");

router.get("/users", usersControllers.getUsers);

router.post("/users", validateUser, hashPassword, usersControllers.postUsers);
router.put("/forgotPassword/:alias", forgotPassword);
router.post(
  "/users/login",
  usersControllers.getUserByAliasWithPasswordAndPassToNext,
  verifyPassword
);
router.post("/users/logout", killToken);

router.use(verifyToken, isTokenKilled);
router.get("/users/:alias", usersControllers.getUser);
router.delete("/users/:id", usersControllers.deleteUsers);
router.put(
  "/users/:id",
  validateUser,
  hashPassword,
  usersControllers.updateUsers
);
router.put("/users", hashPassword, usersControllers.updateUsersPassword);

router.get("/trips/:id/:origin/:day/:hour", tripsControllers.getTrips);
router.get("/trips/:id", tripsControllers.getTripsByUser);
router.post("/trips", tripsControllers.postTrips);
router.delete("/trips/:id", tripsControllers.deleteTripsById);
router.post("/send", mail);

module.exports = router;
