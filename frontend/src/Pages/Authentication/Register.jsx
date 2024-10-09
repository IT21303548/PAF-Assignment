import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik"; // Import the Formik component
import { useState } from "react"; // Remove the duplicate import statement for React
import { TextField } from "@material-ui/core";
import * as Yup from "yup"; // Import Yup
import { Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../Redux/Auth/auth.action";

const Register = () => {

  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const initialValue = { firstName: "", lastName: "", email: "", password: "", gender:"" };
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is Required"),
  });

  //const [formValue, setFormValue] = useState(initialValue);

  const handleSubmit = (values) => {
    values.gender = gender;
    console.log("Handle Submit", values);
    dispatch(registerUserAction({data: values})) //dispatch(registerUserAction({data: values}))
  };

  const handleChange = (event) => { 
    setGender(event.target.value);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValue}
      >
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="firstName"
              type="text"
              placeholder="First Name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="firstName"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="lastName"
              type="text"
              placeholder="Last Name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="lastName"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="email"
              type="email"
              placeholder="Email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-red-500"
            />
          </div>
          <div>
            <RadioGroup
              onChange={handleChange}
              row
              aria-label="gender"
              name="gender"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel 
                value="male" 
                control={<Radio />} 
                label="Male" />
            </RadioGroup>
            <ErrorMessage
              name="gender"
              component={"div"}
              className="text-red-500"
            />
          </div>

          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
        <p>Already have an account?</p>
        <Button onClick={() => navigate("/")}>Login</Button>
      </div>
    </>
  );
};

export default Register;
