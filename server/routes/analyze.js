const express = require("express");
const axios = require("axios");

const analyzeRoute = express.Router();

analyzeRoute.post("/", async (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({
      success: false,
      error: "Sentence is required",
    });
  }

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a professional English rewriter.Rephrase the given sentence into a more natural, friendly, and fluent version.Do NOT explain.Return ONLY the improved sentence.",
          },
          {
            role: "user",
            content: sentence,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      result: response.data.choices[0].message.content,
      provider: "groq",
    });
  } catch (error) {
    console.error("GROQ ERROR:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
});

module.exports = analyzeRoute;
