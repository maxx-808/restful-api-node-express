//created a useless but working server LOL //

const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const PORT = 5000;

// set up to receive JSON and string data
// needed almost everytime for express or server routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes as middleware //

//client routes
// app.use("/", clientRoutes);

//api routes
app.use("/api", apiRoutes);

// server listening //
app.listen(PORT, () => console.log(`listening at  http://localhost:${PORT}`));

//req.body req.data
