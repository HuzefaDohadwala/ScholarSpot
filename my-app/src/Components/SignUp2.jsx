import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp2 = () => {
  const [validated, setValidated] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [percentage, setPercentage] = useState("");
  const [qualification, setQualification] = useState("");
  const [major, setMajor] = useState("");

  const [name, setName] = useState("");
  const [GPA, setGPA] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [currentAcademicLevel, setCurrentAcademicLevel] = useState("");
  const [testScores, setTestScores] = useState({ SAT: "", ACT: "", GRE: "" });
  const [DOB, setDOB] = useState(null);
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [nationality, setNationality] = useState("");
  const [familyIncome, setFamilyIncome] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [preferredStudyLocation, setPreferredStudyLocation] = useState("");
  const [extraCurricularActivities, setExtraCurricularActivities] = useState(
    []
  );
  const [personalInterests, setPersonalInterests] = useState([]);
  const [awards, setAwards] = useState([]);
  const [militaryService, setMilitaryService] = useState(false);
  const [disability, setDisability] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const dataFromSignUp1 = JSON.parse(localStorage.getItem("signupData"));
    if (dataFromSignUp1 && dataFromSignUp1.DOB) {
      const dateObject = new Date(dataFromSignUp1.DOB);
      if (!isNaN(dateObject.getTime())) {
        setDOB(dateObject);
      }
    }
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const dataFromSignUp1 = JSON.parse(localStorage.getItem("signupData"));
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }

    const combinedData = {
      ...dataFromSignUp1,
      country: selectedCountry,
      DOB: DOB && DOB instanceof Date ? DOB.toISOString().split("T")[0] : null,
      pincode: pincode,
      percentage: percentage,
      currentQualification: qualification,
      desiredMajor: major,
      currentAcademicLevel: currentAcademicLevel,
      testScores: testScores,
      ethnicity: ethnicity,
      nationality: nationality,
      familyIncome: familyIncome,
      currentLocation: currentLocation,
      preferredStudyLocation: preferredStudyLocation,
      extraCurricularActivities: extraCurricularActivities,
      personalInterests: personalInterests,
      awards: awards,
      militaryService: militaryService,
      disability: disability,
      name: name,
      GPA: GPA,
      fieldOfStudy: fieldOfStudy,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        combinedData
      );
      console.log("Server Response:", response.data);
      if(response.data && response.data.userId) {
        navigate(`/studentdashboard/user/${response.data.userId}`);
    }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="dark-bg rounded-lg shadow-lg py-4 d-flex align-items-center justify-content-center vh-80 my-8 max-w-4xl mx-auto">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomGPA">
            <Form.Label>GPA</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="GPA"
              value={GPA}
              onChange={(e) => setGPA(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomFieldOfStudy">
            <Form.Label>Field of Study</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Field of Study"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomCurrentAcademicLevel"
          >
            <Form.Label>Current Academic Level</Form.Label>
            <Form.Control
              as="select"
              value={currentAcademicLevel}
              onChange={(e) => setCurrentAcademicLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="PhD">PhD</option>
              <option value="High School">High School</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3"></Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomCountry">
            <Form.Label>Select Country</Form.Label>
            <Form.Control
              as="select"
              required
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.cca3} value={country.cca3}>
                  {country.name.common}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pincode"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomPercentage">
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Percentage"
              required
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomQualification">
            <Form.Label>Current Qualification</Form.Label>
            <Form.Control
              as="select"
              required
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option value="">Select Qualification</option>
              <option value="primaryEducation">Primary Education</option>
              <option value="secondaryEducation">Secondary Education</option>
              <option value="highSchool">High School / Equivalent</option>
              <option value="diploma">Diploma / Advanced Diploma</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="postgraduateDiploma">Postgraduate Diploma</option>
              <option value="doctorate">Doctorate / PhD</option>
              <option value="professionalCertification">
                Professional Certification
              </option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a current qualification.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomMajor">
            <Form.Label>Desired Major</Form.Label>
            <Form.Control
              as="select"
              required
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            >
              <option value="">Select Major</option>
              <option value="accounting">Accounting</option>
              <option value="aerospaceEngineering">
                Aerospace Engineering
              </option>
              <option value="agriculture">Agriculture</option>
              <option value="anthropology">Anthropology</option>
              <option value="architecture">Architecture</option>
              <option value="artHistory">Art History</option>
              <option value="biology">Biology</option>
              <option value="businessAdministration">
                Business Administration
              </option>
              <option value="chemicalEngineering">Chemical Engineering</option>
              <option value="chemistry">Chemistry</option>
              <option value="civilEngineering">Civil Engineering</option>
              <option value="communications">Communications</option>
              <option value="computerScience">Computer Science</option>
              <option value="criminalJustice">Criminal Justice</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="dataScience">Data Science</option>
              <option value="economics">Economics</option>
              <option value="education">Education</option>
              <option value="electricalEngineering">
                Electrical Engineering
              </option>
              <option value="environmentalScience">
                Environmental Science
              </option>
              <option value="finance">Finance</option>
              <option value="graphicDesign">Graphic Design</option>
              <option value="history">History</option>
              <option value="hospitality">Hospitality</option>
              <option value="humanResources">Human Resources</option>
              <option value="informationTechnology">
                Information Technology
              </option>
              <option value="journalism">Journalism</option>
              <option value="law">Law</option>
              <option value="marketing">Marketing</option>
              <option value="mathematics">Mathematics</option>
              <option value="medicine">Medicine</option>
              <option value="music">Music</option>
              <option value="nursing">Nursing</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="philosophy">Philosophy</option>
              <option value="psychology">Psychology</option>
              <option value="sociology">Sociology</option>
              <option value="softwareEngineering">Software Engineering</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomCurrentAcademicLevel"
          >
            <Form.Label>Current Academic Level</Form.Label>
            <Form.Control
              as="select"
              required
              value={currentAcademicLevel}
              onChange={(e) => setCurrentAcademicLevel(e.target.value)}
            >
              <option value="">Select Academic Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="PhD">PhD</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomSAT">
            <Form.Label>SAT Score</Form.Label>
            <Form.Control
              type="number"
              placeholder="SAT Score"
              value={testScores.SAT}
              onChange={(e) =>
                setTestScores({ ...testScores, SAT: e.target.value })
              }
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomACT">
            <Form.Label>ACT Score</Form.Label>
            <Form.Control
              type="number"
              placeholder="ACT Score"
              value={testScores.ACT}
              onChange={(e) =>
                setTestScores({ ...testScores, ACT: e.target.value })
              }
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomGRE">
            <Form.Label>GRE Score</Form.Label>
            <Form.Control
              type="number"
              placeholder="GRE Score"
              value={testScores.GRE}
              onChange={(e) =>
                setTestScores({ ...testScores, GRE: e.target.value })
              }
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomEthnicity">
            <Form.Label>Ethnicity</Form.Label>
            <Form.Control
              as="select"
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              required
            >
              <option value="">Select Ethnicity</option>
              <option value="asian">Asian</option>
              <option value="black">Black/African Descent</option>
              <option value="hispanic">Hispanic/Latino</option>
              <option value="caucasian">Caucasian</option>
              <option value="middleEastern">Middle Eastern</option>
              <option value="nativeAmerican">Native American</option>
              <option value="pacificIslander">Pacific Islander</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomNationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              as="select"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            >
              <option value="">Select Nationality</option>
              {countries.map((country) => (
                <option key={country.cca3} value={country.cca3}>
                  {country.name.common}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomFamilyIncome">
            <Form.Label>Family Income</Form.Label>
            <Form.Control
              type="number"
              placeholder="Family Income"
              value={familyIncome}
              onChange={(e) => setFamilyIncome(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomCurrentLocation"
          >
            <Form.Label>Current Location</Form.Label>
            <Form.Control
              as="select"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              required
            >
              <option value="">Select Current Location</option>
              <option value="newYork">New York</option>
              <option value="losAngeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              {/* Add more cities */}
            </Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomPreferredStudyLocation"
          >
            <Form.Label>Preferred Study Location</Form.Label>
            <Form.Control
              as="select"
              value={preferredStudyLocation}
              onChange={(e) => setPreferredStudyLocation(e.target.value)}
              required
            >
              <option value="">Select Preferred Study Location</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="berlin">Berlin</option>
              <option value="tokyo">Tokyo</option>
              {/* Add more cities */}
            </Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomExtraCurricularActivities"
          >
            <Form.Label>Extra Curricular Activities</Form.Label>
            <Form.Control
              type="text"
              placeholder="Extra Curricular Activities"
              value={extraCurricularActivities}
              onChange={(e) => setExtraCurricularActivities(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomPersonalInterests"
          >
            <Form.Label>Personal Interests</Form.Label>
            <Form.Control
              type="text"
              placeholder="Personal Interests"
              value={personalInterests}
              onChange={(e) => setPersonalInterests(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAwards">
            <Form.Label>Awards</Form.Label>
            <Form.Control
              type="text"
              placeholder="Awards"
              value={awards}
              onChange={(e) => setAwards(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomMilitaryService"
          >
            <Form.Label>Military Service</Form.Label>
            <Form.Check
              type="checkbox"
              label="Have you served in the military?"
              checked={militaryService}
              onChange={(e) => setMilitaryService(e.target.checked)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomDisability">
            <Form.Label>Disability</Form.Label>
            <Form.Check
              type="checkbox"
              label="Do you have any disabilities?"
              checked={disability}
              onChange={(e) => setDisability(e.target.checked)}
            />
          </Form.Group>
        </Row>

        <Button
          className="w-40 d-flex align-items-center mx-auto text-center justify-center"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SignUp2;
