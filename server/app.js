require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarCheck");
const spellCheckRoute = require("./routes/spellCheck");
const app = express();
const PORT = process.env.PORT || 8000;
 
// https://api.openai.com/v1/chat/completions 

//MIDDLEWARE
app.use(cors()); //prevent cors error
app.use(express.json()); //for parsing application/json
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarCheck", grammarCheckRoute);
app.use("/api/spellCheck", spellCheckRoute);


//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
