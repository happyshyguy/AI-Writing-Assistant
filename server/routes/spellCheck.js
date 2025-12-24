const express = require("express");
const axios = require("axios");

const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (req, res) => {
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
            content: "Fix spelling mistakes ONLY.Do not change sentence structure.Return ONLY the corrected sentence.",
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

module.exports = spellCheckRoute;
