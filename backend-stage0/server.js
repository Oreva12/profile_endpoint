const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/me', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = response.data.fact;

    const data = {
      status: "success",
      user: {
        email: "ovedheo@gmail.com",
        name: "Orevaoghene Ovedhe",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(data);

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
