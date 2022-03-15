import { useState } from 'react';
import {prepareUniversistiesData} from '../utils/prepareUniversistiesData';
import translations from '../translations/translation.json';
import { MIN_INPUT_TEXT_LENGTH, UNIVERSITIES_API_NAME}  from '../consts/constsVariables';

export const useFetchUniversities = (setApiList) => {
  const [visibleError, setVisibleError] = useState(false);
  const [ loader, setLoader] = useState(false);

  const checkValidation = (inputValue, userList) => {
    if(inputValue.length > MIN_INPUT_TEXT_LENGTH){
      setVisibleError(false);
      getApiData(inputValue, userList)
    } else {
      if(inputValue === '') {
        setVisibleError(false);
      } else {
        setVisibleError(true);
      }
    setApiList([]);
    }
  };

  async function getApiData(inputValue, userList){
    setLoader(true)
    try {
      const response = await fetch(`${UNIVERSITIES_API_NAME}${inputValue}`);
      const data = await response.json();
      if(!data.length){
        alert(`'${inputValue}' ${translations.notFound}`)
      } else {
        setApiList(prepareUniversistiesData(data, userList))
      }
    } catch(err){
      console.error(translations.failedFetch, err)
    } finally {
      setLoader(false)
    }
  }

  return { checkValidation, loader, visibleError }
}