const userRoutes = require("./userRoutes");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const foodRoutes = require("./foodRoutes");
>>>>>>> parent of a18bff8... navigation
=======
const foodRoutes = require("./foodRoutes");
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
const foodRoutes = require("./foodRoutes");
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master


const constructorMethod = app => {
    app.use("/api", userRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    app.use("/api/food", foodRoutes);
>>>>>>> parent of a18bff8... navigation
=======
    app.use("/api/food", foodRoutes);
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
    app.use("/api/food", foodRoutes);
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;