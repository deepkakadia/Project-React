const express = require("express");
const app = express();
const configRoutes = require("./src/routes");


app.use(express.json());
configRoutes(app);

app.listen(8000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:8000");
});


