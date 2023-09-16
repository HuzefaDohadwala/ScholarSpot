import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate, Link } from "react-router-dom";
import { useSignupData } from "./SignUpDataContext";

const SignUp1 = () => {
  const navigate = useNavigate();
  // const { setSignupData } = useSignupData();
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");

  // const handleCountryChange = (e) => {
  //   setSelectedCountry(e.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      //   const profileImage = form.elements.validationCustomPfp.files[0];
      const formData = {
        firstName: form.elements.validationCustomName.value,
        lastName: form.elements.validationCustomSurname.value,
        email: form.elements.validationCustomEmail.value,
        password: form.elements.validationCustomPassword.value,
        DOB: form.elements.validationCustomDOB.value,
        gender: form.elements.validationCustomGender.value,
      };
      localStorage.setItem("signupData", JSON.stringify(formData));

      navigate("/signup2");
    }
    setValidated(true);
  };

  return (
    <div className="dark-bg rounded-lg shadow-lg py-4 d-flex align-items-center justify-content-center vh-80 my-8 max-w-lg mx-auto">
      <div className="form-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomSurname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose an email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomConPass">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Passwords don't match.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomDOB">
              <Form.Label>Date of Birth</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="date"
                  placeholder="Date of Birth"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a date.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a gender.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="mx-auto w-full d-flex align-items-center ">
            <Button
              className="w-40 d-flex align-items-center mx-auto text-center justify-center"
              type="submit"
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp1;
