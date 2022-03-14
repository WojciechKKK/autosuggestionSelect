import React from 'react';
import styled from 'styled-components';
import '../../../App.css';

const SpinnerStyled = styled.i`
  color: var(--icon-spinner-color);
  font-size: var(--icon-font-size);
  padding: var(--icon-padding);
`

const Spinner = () => {
  return <SpinnerStyled className="fas fa-spinner fa-spin"></SpinnerStyled>
};

export default Spinner;