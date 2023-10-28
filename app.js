const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
	try {
	  const response = await axios.get('http://192.168.1.101:1919'); // ステータスを監視するURL
	  const status = response.status;
	  res.send(`Status: ${status}`);
	} catch (error) {
	  console.error(`ERROR! - ${error}`)
	  res.send('Error: Unable to fetch status');
	}
});

app.listen(port, () => {
	console.log(`Listening localhost:${port}`)
})