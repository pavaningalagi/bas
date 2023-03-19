const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => res.send("Hello World! 2"));
app.get("/about", (req, res) => res.send("your in server one"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
