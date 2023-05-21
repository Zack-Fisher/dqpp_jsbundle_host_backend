const path = require('path');
const dotenv = require('dotenv');

// source the env file
dotenv.config({ path: path.resolve(__dirname, '../../ports.env') });
const myPort = process.env.JSBUNDLE_HOST_PORT;

const port = myPort || 3000;

const express = require('express');
const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
