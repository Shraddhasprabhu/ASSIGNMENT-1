const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle complaint submissions
app.post("/api/complaints", (req, res) => {
    const { name, email, phone, location, description } = req.body;

    // Log the complaint data to the console (could be saved to a database)
    console.log("New complaint received:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Location: ${location}`);
    console.log(`Description: ${description}`);

    // Send a response back to the frontend
    res.status(201).json({ message: "Complaint received successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
