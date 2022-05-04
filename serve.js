const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors())
const options = {
  origin: true,
  methods: ["POST","GET", "PUT", "DELETE", "PATCH"],
  credentials: true,
  maxAge: 3600
};
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, cors(options),function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log('server starter')