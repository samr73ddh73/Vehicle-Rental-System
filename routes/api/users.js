const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (_req, res) => {
  res.json({ msg: "hello" });
});

// Load User model
const User = require("../../models/User");
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//handling user register at api/users/register

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //res.send(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check if it is a unique email
  Users.findOne({ email: req.body.email }).then(user => {
    if (user) res.status(400).json({ email: "Email Already exists" });
    else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //SIZE
        r: "pg", //RATING
        d: "mm" //DEFAULT
      });
      var newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isVitian: req.body.isVitian,
        designation: req.body.designation,
        avatar
      });
      //store the encrypted password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//handling login
//send a post request to api/users/login
//return a JWT Token
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const password = req.body.password;

  Users.findOne({ email: req.body.email }).then(user => {
    if (!user)
      return res
        .status(404)
        .json({ email: "user email not found", isValid: false }); //if there is no user

    //check the password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user Matched
        const payload = {
          id: user.id,
          name: user.name,
          isVitian: user.isVitian,
          designation: user.designation,
          avatar: user.avatar
        };
        //Sign the token
        jwt.sign(payload, keys.secret, { expiresIn: "2h" }, (err, token) => {
          res.json({
            isValid: true,
            token: "Bearer " + token
          });
        });
      } else res.json({ msg: "Incorrect Password", isValid: false });
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);
module.exports = router;
