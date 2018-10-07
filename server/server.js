const path = require('path');
// 1. create express app
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
// 2.use public directory to serve static assets
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
// 3. if request not in folder give back index.html

app.listen(3000, () => {
  console.log('Server is up!');
});
// 4. start on port 3000
