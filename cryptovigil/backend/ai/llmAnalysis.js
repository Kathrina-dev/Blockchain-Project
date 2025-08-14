const axios = require('axios');
require('dotenv').config();

async function analyzeTransactionWithLLM(transaction) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a blockchain security expert. Analyze the following transaction for fraud or anomalies. Respond ONLY with valid JSON: { flagged: true/false, reasons: [..] }"
          },
          {
            role: "user",
            content: JSON.stringify(transaction)
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    const content = response.data.choices[0].message.content;
    console.log('LLM raw response:', content);
    return JSON.parse(content);
  } catch (err) {
    console.error('LLM invoke or parse error:', err.response ? err.response.data : err.message);
    return { flagged: false, reasons: ["LLM response could not be parsed."] };
  }
}

module.exports = analyzeTransactionWithLLM;