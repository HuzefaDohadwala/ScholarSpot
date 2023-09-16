import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Clicked!!");
    console.log("Email:", email, "Password:", password);

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      setMessage(response.data.message);

      // If login is successful, navigate to the student dashboard
      if (response.data.message === "Logged in successfully!") {
        navigate("/studentdashboard");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <>
      <div className="dark-bg rounded-lg shadow-lg py-16 d-flex align-items-center justify-content-center vh-160 my-16 max-w-lg mx-auto">
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="inputGroupPrepend"
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
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Button
              className="w-40 d-flex align-items-center mx-auto text-center justify-center"
              type="submit"
            >
              Next
            </Button>
          </Form>

          <p className="mt-2">
            Don't have an account? <Link to="/signup1">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
