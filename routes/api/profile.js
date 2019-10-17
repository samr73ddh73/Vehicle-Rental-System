const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Load Validation
// const validateProfileInput = require("../../validation/profile");
// const validateExperienceInput = require("../../validation/experience");
// const validateEducationInput = require("../../validation/education");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

router.get("/", verifyToken, (req, res) => {
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const errors = {};

      Profile.findOne({ users: authData.id })
        .then(profile => {
          if (!profile) {
            errors.noprofile = "There is no profile for this user";
            return res.status(404).json(errors);
          }
          res.json(profile);
        })
        .catch(err => res.status(404).json(err));
    }
  });
});

router.post("/", verifyToken, (req, res) => {
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      // Get fields
      const profileFields = {};
      profileFields.user = authData.id;
      if (req.body.branch) profileFields.branch = req.body.branch;
      if (req.body.year) profileFields.year = req.body.year;
      if (req.body.about) profileFields.about = req.body.about;

      // Social
      profileFields.social = {};
      if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
      if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
      if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
      if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram)
        profileFields.social.instagram = req.body.instagram;

      Profile.findOne({ user: authData.id }).then(profile => {
        if (profile) {
          // Update
          Profile.findOneAndUpdate(
            { user: authData.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile));
        } else {
          // Create // Save Profile
          var newProfile = new Profile(profileFields)
            .save()
            .then(profile => res.json(profile));
        }
      });
    }
  });
});

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
