import express from "express";
import Contact from "../model/contact.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save(); // Saves to MongoDB Atlas
        res.status(201).json({ message: "Message saved successfully!" });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;