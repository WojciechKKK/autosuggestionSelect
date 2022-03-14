import React from 'react';
import styled from 'styled-components';
import '../../../App.css';

const DeleteIconStyled = styled.i`
  display: inline-block;
  padding: var(--icon-padding);
  color: var(--icon-delete-color);
  font-size: var(--icon-font-size);
  cursor: pointer;
  &:hover{
    color: var(--icon-error-color)
  }
 `
const DeleteIcon = ({fnClearInput}) => {
  return (
    <DeleteIconStyled onClick={fnClearInput} className="fa fa-trash"></DeleteIconStyled>
  )
};

export default DeleteIcon;