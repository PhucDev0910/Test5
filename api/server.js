const express = require("express");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

//route
app.use("/api", authRoutes);
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
