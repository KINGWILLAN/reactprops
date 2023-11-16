import React from "react";
import FormWrapper from "./FormWrapper";
import Actionbutton from "../ui/Actionbutton";
import InputField from "../ui/inputfield";

const Login = () => {
  return (
    <FormWrapper
      headingText={"Welcome Back"}
      directionText={"Don't have an account yet? Sign up"}
    >
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <Actionbutton text={"Log In"} />
    </FormWrapper>
  );
};

export default Login;
