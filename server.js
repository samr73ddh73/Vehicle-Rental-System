const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const book = require("./routes/api/book");

const app = express();
app.use(express.json());
app.get("/", (_req, res) => {
  res.json({ msg: "hello" });
});
//DB Config
const db = require("./config/keys").mongoURI;

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/book", book);

// Passport middleware
// app.use(passport.initialize());

// // Passport Config
// require("./config/passport")(passport);

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
