const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - Body:`, req.body);
    next();
});

app.use(cors({
    origin: '*'
})); // enable CORS

// Connecting to MongoDB
mongoose.connect(
    "mongodb+srv://Admin:abhigyansexy@cluster0.1c8vwqs.mongodb.net/scholarspot?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

// POST route for signup
app.post('/signup', async (req, res) => {
    console.log("Signup endpoint hit!", req.body);
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: "User data saved successfully!" });
    } catch (error) {
        console.error("Error in /signup:", error);
        res.status(500).send({ error: "Failed to save user data!" });
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Global error handler:", err);
    res.status(500).send({ error: "Internal server error" });
});

app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});
