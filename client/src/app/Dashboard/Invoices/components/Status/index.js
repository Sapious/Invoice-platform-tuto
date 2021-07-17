import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Status = ({ text, icon, color }) => {
  return (
    <div
      className={`bg-${color}-tint bg-opacity-50 py-1 px-2 rounded-full flex items-center justify-between gap-2`}>
      <i className={`${icon} fas fa-check text-${color}-shade`}></i>
      <span className={`text-${color}-shade capitalize`}>{text}</span>
    </div>
  );
};

Status.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Status;
