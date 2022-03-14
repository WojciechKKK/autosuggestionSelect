import { useEffect, useState } from 'react';
import {prepareUniversistiesData} from '../utils/prepareUniversistiesData';
import translations from '../translations/translation.json';

const MIN_INPUT_TEXT_LENGTH = 3;
const UNIVERSITIES_API_NAME = "http://universities.hipolabs.com/search?name=";

export const useFetchUniversities = (userList, setApiList, inputValue) => {
  const [visibleError, setVisibleError] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [ loader, setLoader] = useState(false);

  async function getApiData(){
    setLoader(true)
    try {
      const response = await fetch(`${UNIVERSITIES_API_NAME}${inputValue}`);
      const data = await response.json();
      if(!data.length){
        alert(`'${inputValue}' ${translations.notFound}`)
      } else {
        setUniversities(prepareUniversistiesData(data, userList))
      }
    } catch(err){
      console.error(translations.failedFetch, err)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if(inputValue.length > MIN_INPUT_TEXT_LENGTH){
      setVisibleError(false);
      getApiData();
    }  else {
      if(inputValue === '') {
        setVisibleError(false);
      } else {
        setVisibleError(true);
      }
    setApiList([]);
  }
  // eslint-disable-next-line 
  }, [inputValue]);

  return { universities, loader, visibleError }
}