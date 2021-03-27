// Set up Express

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

// // Require Models
// const db = require("./models/workout");

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/fitness", { useNewUrlParser: true });

// Routes
app.use(require("./routes/routes.js"));
// require("./routes/html-routes.js")(app);

// Start Express app
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
