import React from "react";
import FormWrapper from "./FormWrapper";
import Actionbutton from "../ui/Actionbutton";
import InputField from "../ui/inputfield";

const SignUp = () => {
  return (
    <FormWrapper
      headingText={"Create Your Account"}
      directionText={"Already have an Account? Log in"}
    >
      <div className="flex gap-5">
        <InputField label={"First Name"} />
        <InputField label={"Last Name"} />
      </div>
      <InputField label={"Phone Number"} />
      <InputField label={"Password"} />
      <Actionbutton text={"SIGN UP"} />
    </FormWrapper>
  );
};

export default SignUp;
