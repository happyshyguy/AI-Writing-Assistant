const express = require("express");
const grammarCheckRoute = express.Router();

grammarCheckRoute.post("/", async (req, res) => {
    res.json({ 
        message : "Grammar check route"
     });
})
//export route
module.exports = grammarCheckRoute;