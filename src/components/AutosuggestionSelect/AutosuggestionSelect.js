import React, {useState, useEffect} from 'react';
import Title from '../Title/Title';
import Dropdown from '../Dropdown/Dropdown';
import styled from 'styled-components';
import translation from '../../translations/translation.json'
import OutsideDropdownClose from '../OutsideDropdownClose/OutsideDropdownClose';

const AutosuggestionSelectStyled = styled.div`
  position absolute;
  top: 25px;
  left: 30vw;
  @media (max-width: 768px) {
    left: 4vw;
  }
`
const AutosuggestionSelect = () => {
  const [ expandList, setExpandList] = useState(false);
  const [selecteditems, setSelecteditems] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const toggleDropdown = () => setExpandList(prevState => !prevState);

  const escFunction = e => {
    if(e.key === 'Escape'){
      setExpandList(false)
    }
  };

  return (
    <OutsideDropdownClose fnClick={setExpandList}>
      <AutosuggestionSelectStyled>
        <Title 
          title={translation.title} 
          isExpandList={expandList} 
          items={selecteditems}
          fnClick={toggleDropdown} 
        />
        <Dropdown 
          isVisible={expandList} 
          fnSetCounter={setSelecteditems}
        />
      </AutosuggestionSelectStyled>
    </OutsideDropdownClose>
  )
};

export default AutosuggestionSelect;