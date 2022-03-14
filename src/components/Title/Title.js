import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleParagraph from '../common/TitleParagraph';
import Counter from '../common/Counter';
import Arrow from '../common/icons/Arrow';
import '../../App.css';

const HeaderTitle = styled.div`
  border-radius: var(--global-border-radius);
  box-shadow: 0 0 10px grey;
  margin: 10px 0;
  width: var(--button-width);
  cursor: pointer;
  text-align: center;
  &:hover {
    background: var(--dropdown-background-hover);
  };
    ${({ isExpandList }) => isExpandList && `
      position: relative;
  `}
`
const Title = ({title, isExpandList, items, fnClick}) => {
  return (
    <HeaderTitle isExpandList={isExpandList} onClick={() => fnClick()}>
      <TitleParagraph>{title}</TitleParagraph>
      <Counter>{items}</Counter>
      <Arrow isExpandList={isExpandList} />
    </HeaderTitle>
  )
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  isExpandList: PropTypes.bool.isRequired,
  items: PropTypes.number.isRequired,
  fnClick: PropTypes.func.isRequired
};

export default Title;