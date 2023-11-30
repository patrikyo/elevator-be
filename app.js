const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const elevatorRoutes = require("./routes/elevatorRoutes");

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", elevatorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
