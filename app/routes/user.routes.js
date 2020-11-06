module.exports = app => {
    const users = require("../controllers/user.controller");

    var router = require("express").Router();

    // Create a new User
    router.post("/create", users.create);

    // Retrieve all Users
    router.get("/read", users.findAll);

    // Retrieve all published Users
    router.get("/actived", users.findAllActived);

    // Retrieve a single User with id
    router.get("/readOne/:id", users.findOne);

    // Update a User with id
    router.put("/update/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Delete all users
    router.delete("/", users.deleteAll);

    app.use('/api/users', router);
};