// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     country: { type: String, required: true },
//     pincode: { type: String, required: true },
//     percentage: { type: String, required: true },
//     currentQualification: { type: String, required: true },
//     desiredMajor: { type: String, required: true },
    
// });

// const User = mongoose.model("User", userSchema, 'users');

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    percentage: { type: String, required: true },
    currentQualification: { type: String, required: true },
    desiredMajor: { type: String, required: true },
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
        enum: ['Undergraduate', 'Graduate', 'PhD', 'High School'],
        required: true
    },
    testScores: {
        SAT: Number,
        ACT: Number,
        GRE: Number,
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
    // gender: {
    //     type: String,
    //     enum: ['Male', 'Female', 'Other'],
    //     required: true
    // },
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
            return this.familyIncome < 300000; 
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
        type: [String],
        default: []
    },
    personalInterests: {
        type: [String],
        default: []
    },
    awards: {
        type: [String],
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

const User = mongoose.model("User", userSchema, 'users');

module.exports = User;

