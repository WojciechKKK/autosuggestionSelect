import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../common/icons/Spinner';
import DeleteIcon from '../common/icons/DeleteIcon';
import SearchInputError from '../common/SearchInputError';
import translation from '../../translations/translation.json';

const SearchInputDiv = styled.div`
  padding: calc(var(--dropdown-padding-element) *2) var(--dropdown-padding-element);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px -4px grey;
`;

const Input = styled.input`
  width: 75%;
  font-size: var(--input-font-size);
  padding: var(--input-padding);
  border-radius: var(--input-border-radius);
  border: var(--input-border);
  outline: none;
  border-radius: var(--global-border-radius);
  ::placeholder {
    color: var(--input-placeholder);
  }
  &:focus {
    border: var(--input-border-focus);
  }
`;

const SearchInput = ({value, fnOnChange, visibleError, loader, fnClearInput}) => {
  return (
    <SearchInputDiv>
      <Input 
        type="text" 
        name="universities" 
        value={value} 
        placeholder={translation.inputPlaceholder}
        autoComplete="off"
        onChange={e => fnOnChange(e.target.value)} 
      />
      { loader 
        ? <Spinner /> 
        : <DeleteIcon fnClearInput={fnClearInput} />
      }
      { visibleError && <SearchInputError /> }
    </SearchInputDiv>
  )
};

SearchInput.propTypes = {
  value: PropTypes.string,
  fnOnChange: PropTypes.func.isRequired,
  visibleError: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  fnClearInput: PropTypes.func.isRequired
}
export default SearchInput;