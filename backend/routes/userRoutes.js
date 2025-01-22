import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";



const router = express.Router();

// logging the user in
router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    try {
        const user = await User.findByCredentials(username, password);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        res.json({ message: "Login successful!", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// registering a new user
router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    try {
        const existingUser = await User.findOne({username});
        if (existingUser)
            return res.status(400).json({ message: "Username already exists." });

        const hashedPassword =  await bcrypt.hash(password, 10);

        const newUser = new User({username, password: hashedPassword});
        const savedUser = await newUser.save();

        res.json({ message: "Registration successful!", userId: savedUser._id });


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;