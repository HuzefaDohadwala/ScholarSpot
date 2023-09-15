const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        default: "Mock Scholarship"
    },
    uniCode: {
        type: Number,
        required: true,
        default: 9999, // Corrected the typo here
    },
    location: {
        type: String,
        default: "India"
    },
    courseDuration: {
        type: Number,
        default: ["No Data Available"]
    },
    successRate: {
        type: Number,
        default: 50,
    },
    amount: {
        type: Number,
        required: true,
        default: 100000,
    },
    testScoreMin: {
        SAT: Number,
        TOEFL: Number,
        GRE: Number,
    },
    applicationType: {
        type: [String],
        trim: true,
        default: ["Online"],
    },
    feeWaiverInfo: {
        type: String,
        trim: true,
        default: "Visit the college website for special instructions for fee waivers",
    },
    dueDates: {
        title: {
            type: [String],
            required: true
        },
        date: {
            type: [Date],
            required: true
        }
    },
    websiteUrl: {
        type: String,
        required: true, // This specifies that the field is required
        validate: {
          validator: function (v) {
            // You can add custom validation logic here
            // For example, you can use a regular expression to validate URLs
            // This is a simple example, you can use a more robust regex for URL validation
            return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
          },
          message: 'Invalid URL format',
        },
    },
    fieldOfStudy: {
        type: [String], // Array of fields of study the scholarship is available for
        required: true,
        default: ["Computer Science, Artificial Intelligence"]
    },
    academicLevel: {
        type: [String], // e.g. ['Undergraduate', 'Graduate']
        required: true
    },
    ageCriteria: {
        min: Number,
        max: Number
    },
    genderCriteria: {
        type: [String], // e.g. ['Male', 'Female']
        default: []
    },
    ethnicityCriteria: {
        type: [String],
        default: []
    },
    nationalityCriteria: {
        type: [String],
        default: []
    },
    financialNeedRequired: {
        type: Boolean,
        default: false
    },
    extraCurricularActivities: {
        type: [String],
        default: []
    },
    militaryServiceRequired: {
        type: Boolean,
        default: false
    },
    disabilityPreference: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
