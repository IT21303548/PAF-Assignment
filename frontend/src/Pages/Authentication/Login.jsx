import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik"; // Import the Formik component
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; // Import Yup
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../Redux/Auth/auth.action";
//import { useDispatch } from 'react-redux';

const Login = () => {
  const initialValue = {email: "", password: ""};

  //const [formValue, setFormValue] = useState(initialValue);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is Required"),
  });

  //const [formValue, setFormValue] = useState();

  const handleSubmit = (values) => {
    console.log("Handle Submit", values);
    dispatch(loginUserAction({data: values}))
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
              name="email"
              type="email"
              placeholder="Email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="email" component={"div"} className="text-red-500" />
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
            <ErrorMessage name="password" component={"div"} className="text-red-500" />
          </div>
          

          <Button sx={{padding : ".8rem 0rem"}} fullWidth type='submit' variant="contained" color="primary">Login</Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
        <p>Don't have an account?</p>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;