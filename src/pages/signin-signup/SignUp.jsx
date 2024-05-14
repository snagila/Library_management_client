import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError("");
    if (name === "conformPassword") {
      form.password !== value && setForm("Password doesnot match");
      form.password < 6 && setForm("Must be at least 6 letters long");

      !/!@#$%^&*()/i.test(form.password) &&
        setForm("Must include at lest one !@#$%^&*()");
      !/[a-z]/.test(form.password) &&
        setError("Must have at least one lower case");
      !/[A-Z]/.test(form.password) &&
        setError("Must have at least one upper case");
      !/[0-9]/.test(form.password) && setError("Must have at least one number");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Antonio",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Karki",
    },
    {
      label: "Phone",
      name: "fName",
      type: "number",
      required: false,
      placeholder: "098765",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "****",
    },
    {
      label: "Conform Password",
      name: "conformPassword",
      type: "password",
      required: true,
      placeholder: "****",
    },
  ];
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            className="shadow-lg border p-3 rounded  m-auto mt-4"
            style={{ width: "400px" }}
          >
            <h1>Join the library community...</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}
            {error &
            (
              <div className="my-3">
                <ul>
                  <li className="text-danger fw-bolder">{error}</li>
                </ul>
              </div>
            )}

            <div className="d-grid">
              <Button disabled={error} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignUp;
