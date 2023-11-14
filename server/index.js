const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/fetchImage/:file(*)", (req, res) => {
  let file = req.params.file;
  let fileLocation = URL.createObjectURL("./pics/" + file);
  //res.send({image: fileLocation});
  res.sendFile(`${fileLocation}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
