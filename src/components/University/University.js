import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import CheckIcon from '../common/icons/CheckIcon';

const UniveristyStyled = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-bottom: var(--dropdown-border-element);
  font-size: var(--input-font-size);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  word-break: break-word;
  ${({isChecked}) => isChecked && `
    font-weight: var(--font-weight-bold);
  `}
  &:hover {
    color: var(--university-text-hover)
  }

`;

const University = ({details, fnClick}) => {
  const { isChecked } = details;
  return (
    <UniveristyStyled onClick={() => fnClick(details)}isChecked={isChecked}>
      {details?.name} 
      { isChecked && <CheckIcon /> }
    </UniveristyStyled>
  )
};

export default University;