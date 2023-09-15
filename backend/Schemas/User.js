const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    GPA: {
        type: Number,
        required: true,
        min: 0,
        max: 4
    },
    fieldOfStudy: {
        type: String,
        required: true,
        trim: true
    },
    currentAcademicLevel: {
        type: String,
        enum: ['Undergraduate', 'Graduate', 'PhD', 'High School'], // and any other levels
        required: true
    },
    testScores: {
        SAT: Number,
        ACT: Number,
        GRE: Number,
        // Add others if needed
    },
    DOB: {
        type: Date,
        required: true
    },
    age: { 
        type: Number,
        set: function() {
            let today = new Date();
            let birthDate = new Date(this.DOB);
            let age = today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    ethnicity: {
        type: String,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    familyIncome: {
        type: Number,
        required: true
    },
    financialNeed: {
        type: Boolean,
        default: function() {
            return this.familyIncome < 300000; // 3 lakhs per annum
        }
    },
    currentLocation: {
        type: String,
        required: true,
        trim: true
    },
    preferredStudyLocation: {
        type: String,
        required: true,
        trim: true
    },
    extraCurricularActivities: {
        type: [String], // Array of activities from a dropdown
        default: []
    },
    personalInterests: {
        type: [String], // Array of hobbies, talents
        default: []
    },
    awards: {
        type: [String], // Array of awards
        default: []
    },
    militaryService: {
        type: Boolean,
        default: false
    },
    disability: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;