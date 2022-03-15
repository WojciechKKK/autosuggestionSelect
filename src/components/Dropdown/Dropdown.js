import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../App.css'
import SearchInput from '../SearchInput/SearchInput';
import DropdownList from '../DropdownList/DropdownList';
import ButtonReset from '../ButtonReset/ButtonReset';
import getUserList from '../../utils/getUserList';
import removeObjDuplicationInArray from '../../utils/removeDuplicateObjInArray';
import toggleUniversityStatus from '../../utils/toggleUniversityStatus';
import compareUserListWithChoosen from '../../utils/compareUserListWithChoosen';
import {useFetchUniversities }from '../../hooks/useFetchUniversities';
import { debounce } from "lodash";
import { MAX_RESPONSE_TIME } from '../../consts/constsVariables';

const DropdownStyled = styled.div`
  border-radius: var(--global-border-radius);
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  box-shadow: var(--dropdown-box-shadow);
  width: var(--dropdown-width);
  ${({isVisible}) => isVisible && `
    transform: scale(1);
  `}
` 

const Dropdown = ({isVisible, fnSetCounter}) => {
  const [ inputValue, setInputValue] = useState('');
  const [ userList, setUserList] = useState([]);
  const [apiList, setApiList] = useState([]);
  const {checkValidation, loader, visibleError} = useFetchUniversities(setApiList);
  const debounceOnChange = useCallback(debounce(checkValidation, MAX_RESPONSE_TIME),[]);

  const setValueWithDebounce = (value) => {
    setInputValue(value);
    debounceOnChange(value, userList)
  }

  const resetList = () => {
    setApiList([]);
    setUserList([]);
    fnSetCounter(0);
    console.log("Update", []);
  }

  const clearInputData = () => {
    setInputValue('');
    setApiList([]);
  }
  
  const addToUserList = universityDetails => {
    if(!apiList.length){
      const getUserData = getUserList(userList, universityDetails.name);
      fnSetCounter(getUserData.length);
      setUserList(getUserData);
      console.log("Update", getUserData)
    } else {
      const setUniversitiesCheckedStatus = toggleUniversityStatus(apiList, universityDetails.name);
      const checkedUniversities = setUniversitiesCheckedStatus.filter(({isChecked}) => isChecked)
      const compareLists = compareUserListWithChoosen(userList, setUniversitiesCheckedStatus)
      const concatUniversities = removeObjDuplicationInArray(compareLists, checkedUniversities);

      setApiList(setUniversitiesCheckedStatus);
      setUserList(concatUniversities);
      fnSetCounter(concatUniversities.length);
      console.log("Update", concatUniversities)
    }
  };

  // for hide components - remove transform: scale(0);
  // if(!isVisible) {
  //   return null;
  // };

  return (
    <DropdownStyled isVisible={isVisible}>
      <SearchInput 
        value={inputValue} 
        fnOnChange={setValueWithDebounce} 
        visibleError={visibleError} 
        loader={loader} 
        fnClearInput={clearInputData}
      />
      <DropdownList 
        list={apiList.length ? apiList : userList} 
        fnAddToUserList={addToUserList} 
      />
      <ButtonReset 
        fnClick={resetList}
        visible={!!apiList.length || !!userList.length}
      />
    </DropdownStyled>
  )
};

Dropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  fnSetCounter: PropTypes.func.isRequired
};

export default Dropdown