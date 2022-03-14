import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../../App.css';

const ArrowStyled = styled.p`
  padding: 0 5px;
  color: var(--text-color);
  display: inline-block;
  align-items: center;
`
const Arrow = ({isExpandList, iconColor}) => {
  return (
    <ArrowStyled>
      <i style={{iconColor}} className={isExpandList ? 'fas fa-angle-up' : 'fas fa-angle-down'}></i>
    </ArrowStyled>
  )
};

Arrow.defaultProps = {
  iconColor: 'black'
};

Arrow.propTypes = {
  isExpandList: PropTypes.bool.isRequired
};

export default Arrow