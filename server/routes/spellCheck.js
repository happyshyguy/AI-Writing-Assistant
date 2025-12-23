const express = require("express");
const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (req, res) => {
    res.json({ 
        message : "Spell check route"
     });
})
//export route
module.exports = spellCheckRoute;