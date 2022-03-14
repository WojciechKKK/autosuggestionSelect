import React from 'react';
import University from '../University/University';
import styled from 'styled-components';
import '../../App.css';
import PropTypes from 'prop-types';

const DropdownListStyled = styled.div`
  padding: var(--dropdown-padding-element);
  padding-top: 0;
  max-height: var(--dropdown-height);
  overflow: auto
`
const DropdownList = ({list, fnAddToUserList}) => {
  
  if(!list.length){
    return null
  };

  return (
    <DropdownListStyled>
      {list.map(university => (
        <University 
          key={university.name} 
          details={university}
          fnClick={fnAddToUserList} 
        />
      ))}
    </DropdownListStyled>
  )
};

DropdownList.propTypes = {
  list: PropTypes.array,
  fnAddToUserList: PropTypes.func.isRequired
};

export default DropdownList;