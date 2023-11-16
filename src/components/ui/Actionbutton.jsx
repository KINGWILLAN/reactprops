import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const Actionbutton = ({ text }) => {
  return (
    <div className="w-full">
      <Button fullWidth={true} variant="contained">
        {text}
      </Button>
    </div>
  );
};

Actionbutton.propTypes = {
  text: PropTypes.string,
};

export default Actionbutton;
