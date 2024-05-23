module.exports = app => {
    const users = require("../controller/user.controller");
    console.log("users",users)

    app.post("/users", users.createUser);
    app.get("/users/:userId", users.fetchUserData);
};
