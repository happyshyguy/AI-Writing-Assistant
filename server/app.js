require("dotenv").config();
const express = require("express");
const cors = require("cors");

const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarCheck");
const spellCheckRoute = require("./routes/spellCheck");

const app = express();
const PORT = process.env.PORT || 8000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarCheck", grammarCheckRoute);
app.use("/api/spellCheck", spellCheckRoute);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
