import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const SignUp2 = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomCountry">
            <Form.Label>Select Country</Form.Label>
            <Form.Control
              as="select"
              required
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.cca3} value={country.cca3}>
                  {country.name.common}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" placeholder="Pincode" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Pincode.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomPercentage">
            <Form.Label>Percentage</Form.Label>
            <Form.Control type="text" placeholder="Percentage" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Percentage.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomQualification">
            <Form.Label>Current Qualification</Form.Label>
            <Form.Control as="select" required>
              <option value="">Select Qualification</option>
              <option value="highSchool">High School</option>
              <option value="associateDegree">Associate's Degree</option>
              <option value="bachelorsDegree">Bachelor's Degree</option>
              <option value="mastersDegree">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a qualification.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomMajor">
            <Form.Label>Desired Major</Form.Label>
            <Form.Control as="select" required>
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
              <option value="humanResources">Human Resources</option>
              <option value="informationTechnology">
                Information Technology
              </option>
              <option value="internationalRelations">
                International Relations
              </option>
              <option value="journalism">Journalism</option>
              <option value="linguistics">Linguistics</option>
              <option value="marketing">Marketing</option>
              <option value="mathematics">Mathematics</option>
              <option value="mechanicalEngineering">
                Mechanical Engineering
              </option>
              <option value="medicine">Medicine</option>
              <option value="music">Music</option>
              <option value="nursing">Nursing</option>
              <option value="philosophy">Philosophy</option>
              <option value="physics">Physics</option>
              <option value="politicalScience">Political Science</option>
              <option value="psychology">Psychology</option>
              <option value="sociology">Sociology</option>
              <option value="statistics">Statistics</option>
              <option value="theater">Theater</option>
              <option value="urbanPlanning">Urban Planning</option>
              <option value="veterinaryMedicine">Veterinary Medicine</option>
              <option value="webDevelopment">Web Development</option>
              <option value="zoology">Zoology</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a Major.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp2;
