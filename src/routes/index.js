const userRoutes = require("./userRoutes");


const constructorMethod = app => {
    app.use("/api", userRoutes);
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;