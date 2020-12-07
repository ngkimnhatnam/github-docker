const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Testing server at port with dev branch", 3000);
});
