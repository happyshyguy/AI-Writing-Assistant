const express = require("express");
const axios = require("axios");

const analyzeRoute = express.Router();

analyzeRoute.post("/", async (req, res) => {
  const { sentence } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-5-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that corrects grammar and spelling. If the sentence is correct, return it as it is.",
          },
          {
            role: "user",
            content: sentence,
          },
        ],
        max_tokens: 100,
        n : 2,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      result: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// export route
module.exports = analyzeRoute;
