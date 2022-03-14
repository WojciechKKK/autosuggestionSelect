import React from 'react';
import styled from 'styled-components';
import translation from '../../translations/translation.json';
import '../../App.css';
import PropTypes from 'prop-types';

const ButtonResetStyled = styled.button`
  width: 100%;
  border: none;
  padding: var(--button-padding);
  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-font-size);
  cursor: pointer;
  border-bottom-left-radius: var(--global-border-radius);
  border-bottom-right-radius: var(--global-border-radius);
  &:hover {
    background: var(--button-background-color-hover)
  }
`
const ButtonReset = ({fnClick, visible}) => {
  if(!visible){
    return null
  };

  return (
    <ButtonResetStyled onClick={fnClick}>
      {translation.buttonReset}
    </ButtonResetStyled>
  )
};

ButtonReset.propTypes = {
  fnClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};


export default ButtonReset