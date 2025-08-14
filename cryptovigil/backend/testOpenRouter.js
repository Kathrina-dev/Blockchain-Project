// testOpenRouter.js
const axios = require('axios');
require('dotenv').config();

axios.post(
  'https://openrouter.ai/api/v1/chat/completions',
  {
    model: "openai/gpt-3.5-turbo",
    messages: [
      { role: "system", content: "Say hello in JSON" },
      { role: "user", content: "Say hello" }
    ]
  },
  {
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    }
  }
).then(res => {
  console.log(res.data);
}).catch(err => {
  console.error(err.response ? err.response.data : err.message);
});