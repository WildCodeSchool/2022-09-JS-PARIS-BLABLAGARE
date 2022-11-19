const validateUser = (req, res, next) => {
  const { firstname, lastname, email, alias, password } = req.body;
  const errors = [];
  const emailRegex = /^[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}$/;

  if ((firstname || lastname || email || alias || password) == null) {
    errors.push({ field: "allField", message: "must be completed" });
  }
  if (
    (firstname.length || lastname.length || alias.length || password.length) >=
    30
  ) {
    errors.push({
      field: "firstname, lastname, alias, password",
      message: "should contain less than 30 characters",
    });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "invalid email" });
  }
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
