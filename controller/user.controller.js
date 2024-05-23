const User = require("../model/user.model");

// Controller function to fetch user data
const fetchUserData = (req, res) => {
    const userId = req.params.userId;

    User.findOne(userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                console.log("User not found");
                return res.status(404).json({ message: "User not found" });
            }
            console.log("Error fetching user data:", err.message);
            return res.status(500).json({ message: "An error occurred while fetching user data", error: err.message });
        }
        console.log("Fetched user data:", data);
        res.status(200).json(data);
    });
};

// Controller function to create a user
const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email };

    User.create(newUser, (err, data) => {
        if (err) {
            console.log("Error creating user:", err.message);
            return res.status(500).json({ message: "An error occurred while creating the user", error: err.message });
        }
        console.log("User created successfully:", data);
        res.status(201).json(data);
    });
};

module.exports = { fetchUserData, createUser };
