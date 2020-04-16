const userRoutes = require("./userRoutes");
<<<<<<< HEAD
=======
const foodRoutes = require("./foodRoutes");
>>>>>>> parent of a18bff8... navigation


const constructorMethod = app => {
    app.use("/api", userRoutes);
<<<<<<< HEAD
=======
    app.use("/api/food", foodRoutes);
>>>>>>> parent of a18bff8... navigation
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;