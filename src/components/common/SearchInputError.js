import React from 'react';
import styled from 'styled-components';
import translation from '../../translations/translation.json';
import '../../App.css';

const SearchInputErrorStyled = styled.p`
  color: var( --icon-error-color);
  font-size: var(--error-font-size);
  padding: 0px;
  margin: 0px;
  position: absolute;
  bottom: 15px;
  padding-left: var(--input-padding)
  `
const SearchInputError = () => {
  return (
    <SearchInputErrorStyled>
      {translation.inputError}
    </SearchInputErrorStyled>
  )
};

export default SearchInputError;