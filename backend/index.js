const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./Schemas/User');
const Scholarship = require('./Schemas/Scholarship');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = 'mongodb+srv://Admin:abhigyansexy@cluster0.1c8vwqs.mongodb.net/scholarspot?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

// User Routes
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

// Scholarship Routes
app.get('/scholarships', async (req, res) => {
    try {
        const scholarships = await Scholarship.find();
        res.json(scholarships);
    } catch (error) {
        res.status(500).send();
    }
});

app.post('/scholarships', async (req, res) => {
    try {
        const scholarship = new Scholarship(req.body);
        await scholarship.save();
        res.status(201).send(scholarship);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/scholarships/:id', async (req, res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        if (!scholarship) {
            return res.status(404).send();
        }
        res.send(scholarship);
    } catch (error) {
        res.status(500).send();
    }
});

app.patch('/scholarships/:id', async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!scholarship) {
            return res.status(404).send();
        }
        res.send(scholarship);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/scholarships/:id', async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndDelete(req.params.id);
        if (!scholarship) {
            return res.status(404).send();
        }
        res.send(scholarship);
    } catch (error) {
        res.status(500).send();
    }
});

// Recommendations Route
// Implement the logic for recommendations based on user's profile
app.get('/users/:id/recommendations', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const scholarships = await Scholarship.find();
        const rankedScholarships = scholarships
        .filter(scholarship => {
            // Hard filters - These ensure that unmatched scholarships are immediately disqualified
            if (scholarship.genderCriteria.length && !scholarship.genderCriteria.includes(user.gender)) return false;
            if (scholarship.ethnicityCriteria.length && !scholarship.ethnicityCriteria.includes(user.ethnicity)) return false;
            if (scholarship.nationalityCriteria.length && !scholarship.nationalityCriteria.includes(user.nationality)) return false;
            
            // You can add more hard filters as needed
            
            return true;  // Only pass scholarships that meet all hard filters
        })
        .map(scholarship => {
            let points = 0;
    
            // Point-based criteria (for more soft matching)
            if (scholarship.fieldOfStudy.includes(user.fieldOfStudy)) points += 3;
            if (scholarship.academicLevel.includes(user.currentAcademicLevel)) points += 2;
            if (scholarship.locationPreference.includes(user.preferredStudyLocation)) points += 1;
            if (scholarship.financialNeedRequired === user.financialNeed) points += 2;
    
            // Additional points for other criteria can be added here
    
            return {
                scholarship: scholarship,
                points: points
            };
        });
        // Sort scholarships by points
        const sortedScholarships = rankedScholarships.sort((a, b) => b.points - a.points);
        const filteredScholarships = sortedScholarships.filter(s => s.points > 0 || sortedScholarships[0].points === 0);

        if (filteredScholarships.length === 0) {
            // If no matched scholarships, send some default ones (e.g., top 5 by application deadline)
            const defaultScholarships = await Scholarship.find().sort({ applicationDeadline: 1 }).limit(5);
            return res.json(defaultScholarships);
        }

        res.json(filteredScholarships.map(s => s.scholarship));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});