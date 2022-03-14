import React from 'react';
import { PropTypes } from 'prop-types';

const CheckIcon = ({ iconColor }) => {
  return <i className="fas fa-check" style={{color: iconColor}}></i>
};

CheckIcon.defaultProps = {
  iconColor: 'green'
};

CheckIcon.propTypes = {
  iconColor: PropTypes.string
}
export default CheckIcon