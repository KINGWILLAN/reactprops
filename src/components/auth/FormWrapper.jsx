import React from "react";
import PropTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form className="shadow mt-16 max-w-lg space-y-8 p-4 w-full text-center">
      <h1 className="font-bold text-3xl">{headingText}</h1>
      {children}
      <p className="text-center"> {directionText}</p>
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: PropTypes.string,
  children: PropTypes.array,
  directiontext: PropTypes.string,
};
export default FormWrapper;
